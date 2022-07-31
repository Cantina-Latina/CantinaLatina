
export default class RainAnimation {
    constructor(container = null, props = [], options = {}) {
        this.container = container
        this.props = props
        this.options = options
        this.count = (options.totalItems ? options.totalItems : 100);

        this.container.style.height = '100vh'
        this.container.style.width = '100vw'
        this.container.style.position = 'fixed'
        this.container.style.overflow = 'hidden'
        this.container.style.userSelect = 'none'
        this.container.style.pointerEvents = 'none'
    }

    getImg() {

        const img = document.createElement('img');
        var s = this.options.size;
        const selectedProp = this.props[Math.floor(Math.random() * this.props.length)];
        img.src = selectedProp;
        img.width = (selectedProp.includes("empanada")) ? 200 : this.getRandomInt(s ? s[0] : 10, s = s ? s[1] : 15);
        if (selectedProp.includes("empanada")) {
            // add popup when hovering
            img.classList.add('empanada-img');
        }
        return img;
    }


    /**
     * Prop rain from top to bottom
     */
    rain() {
        let render = () => {


            if (this.count > 0) {

                const Elem = document.createElement('div');

                var r = this.options.rotate,
                    d = this.options.duration;

                var rotate = this.getRandomInt(r ? r[0] : -40, r ? r[1] : 40),
                    duration = this.getRandomInt(d ? d[0] : 5, d ? d[1] : 13)

                Elem.classList.add('rain-animation')
                Elem.style.left = Math.random() * 100 + '%'
                Elem.style.position = 'fixed'
                Elem.style.zIndex = 45
                Elem.style.top = '-10vh'
                Elem.animate([
                    { transform: 'translateY(0)' },
                    { transform: 'translateX(' + this.getRandomInt(5, 5)  + 'vw) translateY(150vh)' }
                ], {
                    duration: duration * 1000,
                })
                const img = this.getImg();

                img.animate([
                    { transform: 'rotate(' + rotate  + 'deg)' },
                    { transform: 'rotate(' + this.getRandomInt(rotate - 20, rotate + 20)  + 'deg)' }
                ], {
                    duration: duration * 1000,
                })

                Elem.appendChild(img);
                this.container.appendChild(Elem);

                this.count--;

                setTimeout(() => {
                    Elem.remove()
                }, 15000)
                
            }
            

        }

        window.rainAnimationInterval = setInterval(render, this.options.interval ?? 550)
    }

    /**
     * Props mouving by mouse movement
     */
    mousemove() {
        let render = () => {
            var a = this.options.amount,
                r = this.options.rotate;

            window.propAmount = this.getRandomInt(a ? a[0] : 30, a ? a[1] : 40)

            for (let i = 0; i < window.propAmount; i++) {
                const Elem = document.createElement('div');

                Elem.classList.add('rain-animation')
                Elem.classList.add('rain-animation-mousemove-' + i)
                Elem.style.position = 'fixed'
                Elem.style.zIndex = 45
                Elem.style.top = Math.random() * 100 + 'vh'
                Elem.style.left = Math.random() * 100 + 'vw'
                Elem.setAttribute('data-ea-move', Math.random() * 10);

                const img = this.getImg();
                img.style.transform = 'rotate(' + this.getRandomInt(r ? r[0] : -40, r ? r[1] : 40) + 'deg)';

                Elem.appendChild(img)
                this.container.appendChild(Elem)
            }

            document.body.addEventListener('mousemove', this.handleMousemove)
        }

        render()
    }

    /**
     * Prop rain from top to bottom and moving by mouse movement
     */
    rainWithMousemove() {
        let render = () => {
            const Elem = document.createElement('div');

            var r = this.options.rotate,
                d = this.options.duration;

            var rotate = this.getRandomInt(r ? r[0] : -40, r ? r[1] : 40),
                duration = this.getRandomInt(d ? d[0] : 5, d ? d[1] : 13)

            Elem.classList.add('rain-animation')
            Elem.classList.add('rain-animation-rainwithmousemove')
            Elem.style.left = Math.random() * 100 + '%'
            Elem.style.position = 'fixed'
            Elem.style.zIndex = 45
            Elem.style.top = '-20vh'
            Elem.animate([
                { transform: 'translateY(0)' },
                { transform: 'translateX(' + this.getRandomInt(5, 5)  + 'vw) translateY(120vh)' }
            ], {
                duration: duration * 1000,
            })
            Elem.setAttribute('data-ea-move', Math.random() * 10);
            const img = this.getImg();
            img.animate([
                { transform: 'rotate(' + rotate  + 'deg)' },
                { transform: 'rotate(' + this.getRandomInt(rotate - 10, rotate + 10)  + 'deg)' }
            ], {
                duration: duration * 1000,
            })
            Elem.appendChild(img)
            this.container.appendChild(Elem)

            setTimeout(() => {
                Elem.remove()
            }, 15000)

            document.body.addEventListener('mousemove', this.handleRainWithMousemove)
        }

        window.rainAnimationInterval = setInterval(render, this.options.interval ?? 550)
    }

    mousemoveElements() {
        document.body.addEventListener('mousemove', this.handleMousemoveElements)
    }

    /**
     * Helper functions
     */

    /**
     * Return random int value with given min and max
     *
     * @param {*} min
     * @param {*} max
     * @returns
     */
    getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)

        return Math.floor(Math.random() * (max - min)) + min
    }

    /**
     * Resetting the props
     */
    reset() {
        this.container.innerHTML = ''
        clearInterval(window.rainAnimationInterval)
        document.body.removeEventListener('mousemove', this.handleMousemove)
        document.body.removeEventListener('mousemove', this.handleRainWithMousemove)
        document.body.removeEventListener('mousemove', this.handleMousemoveElements)
    }

    /**
     * Event handler
     */

    /**
     * Handles the mousemove event
     *
     * @param {*} event
     */
    handleMousemove(event) {
        const ww = window.innerWidth,
            wh = window.innerHeight,
            cx = event.clientX,
            cy = event.clientY

        var calc = (inner, client) => {
            return (client - (inner / 2)) / (inner * 0.05)
        }

        for (let i = 0; i < window.propAmount; i++) {
            const Elem = document.getElementsByClassName('rain-animation-mousemove-' + i)[0],
                x = calc(ww, cx) * (Elem.getAttribute('data-ea-move') / 5.5),
                y = calc(wh, cy) * (Elem.getAttribute('data-ea-move') / 5.5)

            Elem.style.transform = 'translateX(' + x + 'vw) translateY(' + y + 'vh)'
        }
    }

    /**
     * Handles the rainWithMousemove event
     *
     * @param {*} event
     * @param {*} Elem
     */
    handleRainWithMousemove(event) {
        const ww = window.innerWidth,
            wh = window.innerHeight,
            cx = event.clientX,
            cy = event.clientY

        var calc = (inner, client) => {
            return (client - (inner / 2)) / (inner * 0.05)
        }

        const Elems = document.getElementsByClassName('rain-animation-rainwithmousemove')

        for (const Elem of Elems) {
            const x = calc(ww, cx) * (Elem.getAttribute('data-ea-move') / 5.5),
                y = calc(wh, cy) * (Elem.getAttribute('data-ea-move') / 5.5)

            Elem.style.marginLeft = x + 'px'
            Elem.style.marginTop = y + 'px'
        }
    }

    handleMousemoveElements(event) {
        const ww = window.innerWidth,
            wh = window.innerHeight,
            cx = event.clientX,
            cy = event.clientY

        const Elems = document.querySelectorAll('[data-ea-element]')

        var calc = (inner, client) => {
            return (client - (inner / 2)) / (inner * 0.05)
        }

        for (const Elem of Elems) {
            const move = Elem.getAttribute('data-ea-move') ?? 1

            const x = calc(ww, cx) * (move / 5.5),
                y = calc(wh, cy) * (move / 5.5)

            Elem.style.transform = 'translateX(' + x + 'vw) translateY(' + y + 'vh)'
        }
    }
}
