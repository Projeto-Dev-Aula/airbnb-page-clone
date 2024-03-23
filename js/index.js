const menuButton = document.querySelector('.menu-hmbr')
const menuDropdown = document.querySelector('.menu-dropdown')
const saveButton = document.querySelector('.save-button')
const saveButtonText = document.querySelector('.save-item-button-text')
const saveIcon = document.querySelector('.save-button-icon')
const imagesArrays = [
  { src: 'https://a0.muscache.com/im/pictures/3b5dac9c-a5f6-4d84-be3a-147e38f48423.jpg', alt: 'Casa de baixo pra cima'},
  { src: 'https://a0.muscache.com/im/pictures/0d85039b-440f-4c51-8c79-06138882e636.jpg', alt: 'Casa de frente'},
  { src: 'https://a0.muscache.com/im/pictures/eaf11368-8bdd-4e43-ae0b-594a045b6995.jpg', alt: 'Interior da casa'},
  { src: 'https://a0.muscache.com/im/pictures/ded387c2-1aae-43c3-9a40-9e2d98654370.jpg', alt: 'Vista do interior da casa'},
  { src: 'https://a0.muscache.com/im/pictures/8d00cc9a-1185-40f9-863c-4f4aa47afd4b.jpg', alt: 'Mesa de jantar'}
]
const comments = [
  {
    name: 'Vitória',
    country: 'Brasil',
    message: 'Atendeu muito além das minhas expectativas! busquei por um local tranquilo e aconchegante e encontrei o lugar perfeito. me senti numa casinha de bonecas, é tudo muito...',
    stars: 5,
    photo: 'assets/images/vitoria.webp',
    howLongStay: '• Ficou algumas noites',
    whenStay: '• 3 semanas atrás'
  },
  {
    name: 'Thiago',
    country: 'Brasil',
    message: 'Perfeição define....',
    stars: 5,
    photo: 'assets/images/thiago.webp',
    howLongStay: '• Ficou algumas noites',
    whenStay: '• janeiro de 2024'
  },
  {
    name: 'Vitória',
    country: 'Brasil',
    message: 'Atendeu muito além das minhas expectativas! busquei por um local tranquilo e aconchegante e encontrei o lugar perfeito. me senti numa casinha de bonecas, é tudo muito...',
    stars: 5,
    photo: 'assets/images/vitoria.webp',
    howLongStay: '• Ficou algumas noites',
    whenStay: '• 3 semanas atrás'
  },
  {
    name: 'Thiago',
    country: 'Brasil',
    message: 'Perfeição define....',
    stars: 5,
    photo: 'assets/images/thiago.webp',
    howLongStay: '• Ficou algumas noites',
    whenStay: '• janeiro de 2024'
  },
  {
    name: 'Vitória',
    country: 'Brasil',
    message: 'Atendeu muito além das minhas expectativas! busquei por um local tranquilo e aconchegante e encontrei o lugar perfeito. me senti numa casinha de bonecas, é tudo muito...',
    stars: 5,
    photo: 'assets/images/vitoria.webp',
    howLongStay: '• Ficou algumas noites',
    whenStay: '• 3 semanas atrás'
  },
  {
    name: 'Thiago',
    country: 'Brasil',
    message: 'Perfeição define....',
    stars: 5,
    photo: 'assets/images/thiago.webp',
    howLongStay: '• Ficou algumas noites',
    whenStay: '• janeiro de 2024'
  },
  {
    name: 'Vitória',
    country: 'Brasil',
    message: 'Atendeu muito além das minhas expectativas! busquei por um local tranquilo e aconchegante e encontrei o lugar perfeito. me senti numa casinha de bonecas, é tudo muito...',
    stars: 5,
    photo: 'assets/images/vitoria.webp',
    howLongStay: '• Ficou algumas noites',
    whenStay: '• 3 semanas atrás'
  },
  {
    name: 'Thiago',
    country: 'Brasil',
    message: 'Perfeição define....',
    stars: 5,
    photo: 'assets/images/thiago.webp',
    howLongStay: '• Ficou algumas noites',
    whenStay: '• janeiro de 2024'
  }
]
const commentsContainer = document.querySelector('.comments')
comments.forEach(comment => {
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');

  const profile = document.createElement('div');
  profile.classList.add('profile');

  profile.innerHTML = `
    <img src="${comment.photo}" alt="${comment.name}">
    <div class="profile-info">
      <h5>${comment.name}</h5>
      <p>${comment.country}</p>
      <h6>• ${comment.howLongStay}</h6>
      <p>• ${comment.whenStay}</p>
    </div>
  `;

  const rating = document.createElement('div');
  rating.classList.add('rating');

  let stars = '';
  for (let i = 0; i < comment.stars; i++) {
    stars += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 0.5625rem; width: 0.5625rem; fill: var(--f-k-smk-x);"><path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>';
  }
  rating.innerHTML = stars;

  const commentText = document.createElement('div');
  commentText.classList.add('comment-text');

  const message = document.createElement('p');
  message.textContent = comment.message;
  commentText.appendChild(message);

  const showMoreButton = document.createElement('h6');
  showMoreButton.textContent = 'Mostrar mais';
  commentText.appendChild(showMoreButton);

  commentElement.appendChild(profile);
  commentElement.appendChild(rating);
  commentElement.appendChild(commentText);

  commentsContainer.appendChild(commentElement);
});

let indexImg = 0
const imgElement = document.querySelector('.photos img')
imgElement.src = imagesArrays[indexImg].src
imgElement.alt = imagesArrays[indexImg].alt

const prevImage = () => {
  if (indexImg >= 1) indexImg--
  else indexImg = imagesArrays.length - 1
  imgElement.src = imagesArrays[indexImg].src
  imgElement.alt = imagesArrays[indexImg].alt
}

const nextImage = () => {
  if (indexImg < imagesArrays.length - 1) indexImg++
  else indexImg = 0
  imgElement.src = imagesArrays[indexImg].src
  imgElement.alt = imagesArrays[indexImg].alt
}

if (window.localStorage.getItem('propriedadeSalva')) {
  saveIcon.setAttribute('fill', 'rgb(255, 56, 92)')
  saveButtonText.innerHTML = 'Salvos'
}

menuButton.addEventListener('click', () => {
  menuDropdown.classList.toggle('show')
})

document.addEventListener('click', (event) => {
  const isClickInside = menuButton.contains(event.target)
  if (!isClickInside) {
    menuDropdown.classList.remove('show')
  }
})

saveButton.addEventListener('click', () => {
  if (window.localStorage.getItem('propriedadeSalva')) {
    window.localStorage.removeItem('propriedadeSalva')
    saveIcon.setAttribute('fill', 'none')
    saveButtonText.innerHTML = 'Salvar'
  } else {
    window.localStorage.setItem('propriedadeSalva', 'CASA DA ARVORE EXPERIÊNCIA ÚNICA EM SERRA NEGRA')
    saveIcon.setAttribute('fill', 'rgb(255, 56, 92)')
    saveButtonText.innerHTML = 'Salvos'
  }
})
