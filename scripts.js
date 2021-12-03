;(function() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    window.addEventListener('DOMContentLoaded', () => {

        const feedbackOpenButton$ = document
            .querySelector('.order__button')

        const feedbackCloseButton$ = document
            .querySelector('.feedback-form__close-button')

        const feedbackForm$ = document
            .querySelector('.feedback-form')

        const feedbackFormInner$ = document
            .querySelector('.feedback-form__inner')

        const formsBackground$ = document
            .querySelector('.forms__darkback')

        feedbackOpenButton$
            .addEventListener('click', () => {
                feedbackFormInner$.style.animation = null;
                feedbackForm$.style.display = 'block';
                formsBackground$.style.display = 'block';
                sleep(1).then(() => {
                    formsBackground$.classList.add('blackout');
                })
            })

        feedbackCloseButton$
            .addEventListener('click', () => {
                feedbackFormInner$.offsetHeight;
                feedbackFormInner$.style.animation = 'none';
                feedbackFormInner$.style.animation = 'disappearance .7s 1';
                formsBackground$.classList.remove('blackout');
                sleep(500).then(() => {
                    formsBackground$.style.display = null;
                })
                sleep(700).then(() => {
                    feedbackForm$.style.display = null;
                })
            })
    })
})();