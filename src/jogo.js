let jogo = {

    imagens20: [
        "assets/imagens/Hunt.webp",
        "assets/imagens/Nihility.webp",
        "assets/imagens/Harmony.webp",
        "assets/imagens/Remembrance.webp",
        "assets/imagens/Preservation.webp",
        "assets/imagens/Erudition.webp",
        "assets/imagens/Destruction.webp",
        "assets/imagens/Elation.webp",
        "assets/imagens/Abundance.webp",
        "assets/imagens/Voracity.webp",
    ],
    imagens30: [
        "assets/imagens/Hunt.webp",
        "assets/imagens/Nihility.webp",
        "assets/imagens/Harmony.webp",
        "assets/imagens/Remembrance.webp",
        "assets/imagens/Preservation.webp",
        "assets/imagens/Erudition.webp",
        "assets/imagens/Destruction.webp",
        "assets/imagens/Elation.webp",
        "assets/imagens/Abundance.webp",
        "assets/imagens/Wind.webp",
        "assets/imagens/Fire.webp",
        "assets/imagens/Lightning.webp",
        "assets/imagens/Ice.webp",
        "assets/imagens/Imaginary.webp",
        "assets/imagens/Quantum.webp",
    ],


    tamanhoDaGrid: null,
    lockMode: false,
    firstCard: null,
    secondCard: null,
    cards: null,
    moves: 0,

    whatIsGrid: function (tamanho) {
        this.tamanhoDaGrid = tamanho;
    },

    setCard: function (id) {

        let card = this.cards.filter(card => card.id === id)[0];
        if (card.flipped || this.lockMode) {
            return false;
        }

        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }

    },

    checkMatch: function () {
        if (!this.firstCard || !this.secondCard) {
            return false;
        }
        this.moves++;
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },
    unflipCards() {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    checkGameOver() {

        return this.cards.filter(card => !card.flipped).length == 0;
    },


    createCards: function () {
        this.cards = [];
        if (this.tamanhoDaGrid === 20) {
            this.imagens20.forEach((tech) => {
                this.cards.push(this.createPair(tech));
            })
            this.cards = this.cards.flatMap(pair => pair);
            this.shuffleCards();
            return this.cards;
        } else {
            this.imagens30.forEach((tech) => {
                this.cards.push(this.createPair(tech));
            })
            this.cards = this.cards.flatMap(pair => pair);
            this.shuffleCards();
            return this.cards;
        }
    },

    createPair: function (tech) {

        return [{
            id: this.createIdWith(),
            icon: tech,
            flipped: false,
        }, {
            id: this.createIdWith(),
            icon: tech,
            flipped: false,
        }]

    },

    createIdWith: function () {
        return parseInt(Math.random() * 10000);
    },

    shuffleCards: function (cards) {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }

    }



}

export default jogo