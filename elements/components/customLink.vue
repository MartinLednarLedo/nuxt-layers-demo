<script setup lang="ts">
interface Props {
  variant?: LinkStyleProps["intent"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});
</script>

<template>
  <NuxtLink :class="linkStyles({ intent: props.variant })">My Link</NuxtLink>
</template>
