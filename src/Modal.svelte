<script>
  export let openCallback = () => {};
  export let closeCallback = () => {};
  export let open = false;

  let modal;

  function handleToggle(e) {
    if (modal.hasAttribute("open")) {
      document.querySelector("body").classList.add("overflow-hidden");
      if (openCallback && typeof openCallback === "function") {
        openCallback();
      }
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
      if (closeCallback && typeof closeCallback === "function") {
        closeCallback();
      }
    }
  }

  function closeModal(e) {
    e.preventDefault();
    modal.removeAttribute("open");
  }

  function openModal(e) {
    e.preventDefault();
    modal.setAttribute("open", "");
  }

  function handleSubmit(e) {}
</script>

<style>
  .modal > summary.button {
    list-style: none;
    border-radius: 100%;
    background-color: orange;
    box-shadow: 1px 1px 3px #000;
    text-align: center;
    padding: 1px 2px;
    cursor: pointer;
    outline: none;
  }

  .modal[open] > summary::before {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    cursor: default;
    content: " ";
    z-index: 40;
    background: rgba(27, 31, 35, 0.5);
  }

  .modal[open] > aside {
    position: absolute;
    width: 100%;
    background: white;
    /* @apply p-5 rounded shadow-lg bg-white flex flex-col justify-between items-center; */
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.5);
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    margin: 5vh auto;
    max-height: 90vh;
    max-width: 90vw;
    z-index: 50;
    transform: translateX(-50%);
    animation-name: fadein;
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .modal summary::-webkit-details-marker {
    display: none;
  }

  .modal > summary {
    background: white;
    padding: 4px;
    border-radius: 5px;
    min-height: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .modal > summary > span {
    color: grey;
    font-size: 18px;
    text-align: center;
  }

  .modal > aside > form {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  :global(.overflow-hidden) {
    overflow: hidden;
  }
</style>

<svelte:body class="{open ? 'overflow-hidden' : ''}" />

<details class="modal" {open} bind:this="{modal}" on:toggle={handleToggle}>
  <summary class="button">
    <span>Add New Card</span>
  </summary>
  <aside>
    <form on:submit={handleSubmit} class="flex w-full flex-col">
      <header class="flex w-full justify-between">
        <h1>Add a New Card</h1>
        <button type="button" class="font-bold text-3xl text-grey" on:click={closeModal}>&times;</button>
      </header>
      <section class="flex flex-col justify-start w-full my-4">
        <p class="mb-2 w-full">What do you want to name your card?</p>
        <input type="text" class="rounded p-4 w-full bg-grey-lighter" placeholder="Card Title" />
      </section>
      <footer class="flex justify-end w-full">
        <button type="submit" class="rounded border-2 text-blue hover:text-blue-dark hover:shadow-md border-blue-light hover:border-blue bg-white px-4 py-2">Save</button>
      </footer>
    </form>
  </aside>
</details>