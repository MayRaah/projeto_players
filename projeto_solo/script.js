const abriModal = document.querySelector('#abrir-modal');
const minhaModal = document.querySelector('#minha-modal');
const fecharModal = document.querySelector('#fechar-modal');

abriModal.addEventListener('click', () => {
    minhaModal.showModal();
});

fecharModal.addEventListener('click', () => {
    minhaModal.close();
})