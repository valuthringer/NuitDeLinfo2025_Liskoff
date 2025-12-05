class GlobalState {
    constructor() {
        this.scoreKey = 'nird_score';
        this.cartKey = 'nird_cart';
        this.score = this.getScore();
        this.cart = this.getCart();

        this.initUI();
    }

    getScore() {
        const score = localStorage.getItem(this.scoreKey);
        return score ? parseInt(score, 10) : 0;
    }

    setScore(value) {
        this.score = value;
        localStorage.setItem(this.scoreKey, this.score);
        this.updateScoreUI();
    }

    addScore(points) {
        this.setScore(this.score + points);
        this.showFloatingScore(points);
    }

    getCart() {
        const cart = localStorage.getItem(this.cartKey);
        return cart ? JSON.parse(cart) : [];
    }

    addToCart(product) {
        this.cart.push(product);
        localStorage.setItem(this.cartKey, JSON.stringify(this.cart));

        this.addScore(product.scoreImpact);

        this.showNotification(`Ajouté : ${product.name} (${product.scoreImpact > 0 ? '+' : ''}${product.scoreImpact} pts)`);

        window.dispatchEvent(new CustomEvent('cartUpdated', { detail: this.cart }));
    }

    removeFromCart(index) {
        const product = this.cart[index];
        if (product) {
            this.cart.splice(index, 1);
            localStorage.setItem(this.cartKey, JSON.stringify(this.cart));

            this.addScore(-product.scoreImpact);

            window.dispatchEvent(new CustomEvent('cartUpdated', { detail: this.cart }));
        }
    }

    clearCart() {
        this.cart = [];
        localStorage.removeItem(this.cartKey);
        this.setScore(0);
        window.dispatchEvent(new CustomEvent('cartUpdated', { detail: this.cart }));
    }

    initUI() {
        if (!document.getElementById('global-score-display')) {
            const scoreContainer = document.createElement('div');
            scoreContainer.id = 'global-score-display';
            scoreContainer.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                padding: 10px 20px;
                border-radius: 20px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: white;
                font-family: 'Inter', sans-serif;
                font-weight: bold;
                z-index: 9999;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                transition: transform 0.3s ease;
                cursor: pointer;
            `;
            scoreContainer.title = "Score NIRD Global";
            document.body.appendChild(scoreContainer);
        }
        this.updateScoreUI();
    }

    updateScoreUI() {
        const el = document.getElementById('global-score-display');
        if (el) {
            let color = 'white';
            if (this.score > 50) color = '#4ade80';
            if (this.score < -50) color = '#f87171';

            el.innerHTML = `Score NIRD: <span style="color: ${color}">${this.score}</span>`;

            el.style.transform = 'scale(1.1)';
            setTimeout(() => el.style.transform = 'scale(1)', 200);
        }
    }

    showFloatingScore(points) {
        const el = document.createElement('div');
        el.textContent = points > 0 ? `+${points}` : points;
        el.style.cssText = `
            position: fixed;
            top: 50px;
            right: 40px;
            color: ${points > 0 ? '#4ade80' : '#f87171'};
            font-weight: bold;
            font-size: 1.5rem;
            pointer-events: none;
            z-index: 10000;
            animation: floatUp 1s ease-out forwards;
        `;
        document.body.appendChild(el);

        if (!document.getElementById('float-anim')) {
            const style = document.createElement('style');
            style.id = 'float-anim';
            style.textContent = `
                @keyframes floatUp {
                    0% { opacity: 1; transform: translateY(0); }
                    100% { opacity: 0; transform: translateY(-30px); }
                }
            `;
            document.head.appendChild(style);
        }

        setTimeout(() => el.remove(), 1000);
    }

    showNotification(message) {
        const notif = document.createElement('div');
        notif.textContent = message;
        notif.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #333;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;
        document.body.appendChild(notif);

        setTimeout(() => {
            notif.style.opacity = '0';
            notif.style.transform = 'translateY(10px)';
            notif.style.transition = 'all 0.3s ease';
            setTimeout(() => notif.remove(), 300);
        }, 3000);
    }
}

window.nirdState = new GlobalState();
