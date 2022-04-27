<script lang="ts">
  import { CLASS_DARK, CLASS_LIGHT } from "$lib/constants";
  import { onMount } from "svelte";

  let isDark = true;

  onMount(() => {
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null;
    isDark = currentTheme ? currentTheme === "dark" : true;
  });

  function setClassOnDocumentBody(isDarkMode: boolean) {
    document.body.classList.add(isDarkMode ? CLASS_DARK : CLASS_LIGHT);
    document.body.classList.remove(isDarkMode ? CLASS_LIGHT : CLASS_DARK);
  }

  function switchTheme() {
    setClassOnDocumentBody(!isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
    isDark = !isDark;
  }
</script>

<button on:click={switchTheme}>
  <span />
</button>

<style>
  span:before {
    content: "light";
    display: block;
  }

  :global(.dark-theme) span:before {
    content: "dark";
  }

  button {
    position: fixed;
    right: 1rem;
    top: 1rem;

    background-color: var(--colors-blue60);
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;

    transition: 0.25s background-color ease;
  }

  button:hover {
    background-color: var(--colors-blue70);
  }
</style>
