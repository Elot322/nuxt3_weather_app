<template>
  <div :class="$style['default-container']">
    <slot/>
  </div>
</template>

<style lang="scss" module>
.default-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  justify-items: center;
}
</style>