<script lang="ts">
import { VCard } from "vuetify/lib";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "BaseCard",
  extends: VCard,
  mixins: [
    {
      props: {
        outlined: { default: true },
        rounded: { default: "lg" },
      },
    },
  ],
});
</script>
