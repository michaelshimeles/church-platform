import { defineField, defineType } from "sanity";
import { YouTubePreview } from "../../components/YouTubePreview";


export default defineType({
  name: "youtube",
  title: "Youtube",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "YouTube URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      url: "url",
    },
  },
  components: {
    preview: YouTubePreview,
  },
});
