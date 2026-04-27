<script lang="ts">
  type Props = {
    strings: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    pause?: number;
  };

  let {
    strings,
    typeSpeed = 80,
    deleteSpeed = 50,
    pause = 1500,
  }: Props = $props();

  let display = $state("");

  $effect(() => {
    if (strings.length === 0) return;
    let cancelled = false;
    let index = 0;

    const tick = async () => {
      while (!cancelled) {
        const target = strings[index % strings.length];
        for (let i = 1; i <= target.length && !cancelled; i++) {
          display = target.slice(0, i);
          await wait(typeSpeed);
        }
        await wait(pause);
        for (let i = target.length; i >= 0 && !cancelled; i--) {
          display = target.slice(0, i);
          await wait(deleteSpeed);
        }
        index++;
      }
    };
    tick();

    return () => {
      cancelled = true;
    };
  });

  function wait(ms: number) {
    return new Promise<void>((r) => setTimeout(r, ms));
  }
</script>

<span class="typewriter">{display}<span class="cursor">|</span></span>

<style>
  .typewriter {
    display: inline-block;
  }
  .cursor {
    display: inline-block;
    margin-left: 2px;
    animation: blink 1s steps(2) infinite;
  }
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
</style>
