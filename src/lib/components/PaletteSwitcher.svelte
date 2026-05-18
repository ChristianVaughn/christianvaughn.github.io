<script lang="ts">
  import { paletteState } from "../palette.svelte";
  import { palettes, paletteIds, type PaletteId } from "../palettes";

  let open = $state(false);

  function pick(id: PaletteId) {
    paletteState.set(id);
  }
</script>

<div class="palette-switcher" class:open>
  {#if open}
    <div class="panel">
      <div class="panel-head">
        <span class="title">Palette</span>
        <button
          type="button"
          class="close"
          aria-label="Close palette switcher"
          onclick={() => (open = false)}
        >
          ×
        </button>
      </div>
      <ul class="options">
        {#each paletteIds as id (id)}
          {@const p = palettes[id]}
          {@const isActive = paletteState.current === id}
          <li>
            <button
              type="button"
              class="option"
              class:active={isActive}
              onclick={() => pick(id)}
            >
              <span class="swatches" aria-hidden="true">
                <span class="sw" style="background:{p.colors.primary}"></span>
                <span class="sw" style="background:{p.colors.secondary}"></span>
                <span class="sw" style="background:{p.colors.accent}"></span>
                <span class="sw" style="background:{p.colors.bg}"></span>
              </span>
              <span class="text">
                <span class="label">{p.label}</span>
                <span class="blurb">{p.blurb}</span>
              </span>
              {#if isActive}<span class="check" aria-hidden="true">✓</span>{/if}
            </button>
          </li>
        {/each}
      </ul>
      <p class="hint">
        Persists in localStorage. Build sets default via
        <code>VITE_PALETTE</code>.
      </p>
    </div>
  {/if}
  <button
    type="button"
    class="toggle"
    aria-label={open ? "Close palette switcher" : "Open palette switcher"}
    aria-expanded={open}
    onclick={() => (open = !open)}
  >
    <span class="dot"></span>
    Palette
  </button>
</div>

<style>
  .palette-switcher {
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 9999;
    font-family:
      ui-sans-serif,
      system-ui,
      -apple-system,
      "Segoe UI",
      Roboto,
      sans-serif;
    color: #1a1a1a;
  }

  .toggle {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #1a1a1a;
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: 10px 16px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  }
  .toggle:hover {
    background: #2a2a2a;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(135deg, #c97b8a, #a89bc4);
    display: inline-block;
  }

  .panel {
    position: absolute;
    bottom: calc(100% + 8px);
    right: 0;
    width: 320px;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
    padding: 12px;
  }

  .panel-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 6px 8px;
  }
  .title {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #666;
  }
  .close {
    background: transparent;
    border: none;
    font-size: 20px;
    line-height: 1;
    color: #666;
    cursor: pointer;
    padding: 0 4px;
  }
  .close:hover {
    color: #1a1a1a;
  }

  .options {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .option {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    text-align: left;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    transition:
      background 0.12s,
      border-color 0.12s;
  }
  .option:hover {
    background: #f5f5f5;
  }
  .option.active {
    background: #f5f5f5;
    border-color: #d0d0d0;
  }

  .swatches {
    display: inline-flex;
    flex-shrink: 0;
    border-radius: 6px;
    overflow: hidden;
    width: 56px;
    height: 28px;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  .sw {
    flex: 1;
    height: 100%;
  }

  .text {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
  }
  .label {
    font-size: 13px;
    font-weight: 600;
    color: #1a1a1a;
  }
  .blurb {
    font-size: 11px;
    color: #777;
    line-height: 1.3;
  }
  .check {
    color: #1a1a1a;
    font-weight: 700;
    font-size: 14px;
    margin-left: auto;
  }

  .hint {
    font-size: 11px;
    color: #888;
    margin: 8px 6px 2px;
    line-height: 1.4;
  }
  .hint code {
    background: #f0f0f0;
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 10px;
  }
</style>
