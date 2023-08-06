'use strict';

// Menu/dashboard
(function () {
  const menuWrapper = document.querySelector('.js-menu-wrapper');
  if (!menuWrapper) return null;
  const buttonAddLink = document.querySelector('.js-add-link');
  
  buttonAddLink.addEventListener('click', addNewLink);

  menuWrapper.addEventListener('click', (e) => {
    removeLink(e);
  });

  function addNewLink() {
    const newId = getNewId();
    const newLink = getMenuItem(newId);
    if (!newId || !newLink) return null;
    menuWrapper.insertAdjacentHTML('beforeend', newLink);
  }

  function removeLink(e) {
    const button = e.target.closest('.js-delete-link');
    if (!button) return null;
    if (!menuWrapper.contains(button)) return null;
    const id = button.dataset.id;
    const link = document.querySelector(`[data-id="${id}"]`);
    if (!link) return null;
    link.remove();
  }

  function getNewId() {
    const links = menuWrapper.querySelectorAll('.js-link');
    if (!links || links.length === 0) return 1;
    
    const ids = Array.from(links).map((link) => {
      return +link.dataset.id.slice(5);
    });

    return Math.max(...ids) + 1;
  }

  function getMenuItem(id) {
    return `<div class="row mb-3 js-link" data-id="link-${id}">
      <div class="col-10">
        <div class="row">
          <div class="col">
            <div class="form-floating">
              <input name="link-text-${id}" type="text" class="form-control" id="link-text-${id}" placeholder="link-text">
              <label for="link-text-${id}">Link text</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating">
              <input name="link-url-${id}" type="text" class="form-control" id="link-url-${id}" placeholder="link-url">
              <label for="link-url-${id}">Link url</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2 d-flex align-items-center">
        <button type="button" class="btn btn-outline-danger js-delete-link" data-id="link-${id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg>
        </button>
      </div>
    </div>`;
  }
})();

// Del page/article
(function () {
  document.addEventListener('click', (e) => {
    const delButton = e.target.closest('.js-del-page');
    if (!delButton) return null;
    const id = delButton.dataset?.id || null;
    const type = delButton.dataset?.type || null;
    if (id && type) {
      fetch(`/${type}/${id}`, {
        method: 'DELETE',
      }).then(() => {
        window.location.reload();
      });
    }
  });
})();
