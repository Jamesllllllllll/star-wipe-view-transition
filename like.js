const LIKES_API_BASE = 'https://jamesllllllllll--019894a514b47659ac14319f8b619533.web.val.run/api';
const WEBSITE_DOMAIN = 'starwipe.fun';

class LikeComponent {
    constructor() {
        this.likeButton = document.getElementById('like-button');
        this.likeCount = document.getElementById('like-count');
        this.heart = document.getElementById('heart');
        
        if (this.likeButton) {
            this.currentPageUrl = window.location.pathname;
            this.init();
        }
    }

    init() {
        this.loadLikes();
        this.likeButton.addEventListener('click', () => this.handleLike());
    }

    async loadLikes() {
        try {
            const url = `${LIKES_API_BASE}/likes/${WEBSITE_DOMAIN}`;
            const response = await fetch(url);
            const data = await response.json();
            
            this.updateLikeCount(data.likeCount || 0);
        } catch (error) {
            console.error('Error fetching likes:', error);
            this.updateLikeCount(0);
        }
    }

    async handleLike() {
        try {
            this.likeButton.classList.add('liked');
            
            const response = await fetch(`${LIKES_API_BASE}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    website: WEBSITE_DOMAIN
                })
            });

            const data = await response.json();
            
            if (data.success) {
                this.updateLikeCount(data.likeCount);
                this.createSparkleEffect();
            }
            
            setTimeout(() => {
                this.likeButton.classList.remove('liked');
            }, 400);
            
        } catch (error) {
            console.error('Error posting like:', error);
            this.likeButton.classList.remove('liked');
        }
    }

    updateLikeCount(count) {
        this.likeCount.textContent = count;
    }

    createSparkleEffect() {
        const sparkles = ['✨', '⭐', '💫', '🌟'];
        const rect = this.likeButton.getBoundingClientRect();
        
        for (let i = 0; i < 6; i++) {
            const sparkle = document.createElement('div');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.position = 'fixed';
            sparkle.style.left = (rect.left + rect.width / 2 + (Math.random() - 0.5) * 100) + 'px';
            sparkle.style.top = (rect.top + rect.height / 2 + (Math.random() - 0.5) * 100) + 'px';
            sparkle.style.fontSize = '20px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.animation = Math.random() > 0.5 ? 'sparkle-pop 1s ease-out forwards' : 'sparkle-burst 1.2s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1200);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LikeComponent();
});