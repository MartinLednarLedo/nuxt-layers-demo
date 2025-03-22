<script setup lang="ts">
import { type ButtonStyleProps, buttonStyles } from "./button.styles";

interface Props {
  variant?: ButtonStyleProps["intent"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});
</script>

<template>
  <button :class="buttonStyles({ intent: props.variant })">My button</button>
</template>
