
const mainContent = document.querySelector('#mainContent');
const conversationCard = document.querySelector('#conversationCard');
const button = document.querySelector('#button');

mainContent.addEventListener('click', (e) => {
    if (e.target.id === 'button') {
        const question = new Question;
        const randomQuestion = question.getRandomQuestion();
        conversationCard.innerHTML = `<h2>${randomQuestion}</h2>`;
    }
});