import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  // A singleton — there should only ever be one Site Settings document.
  fields: [
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      initialValue: "Supplement Bank",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description:
        "Your brand logo (shown in the header). Use a transparent PNG that looks good on a white background. Leave empty to use the built-in shield mark.",
      options: { hotspot: false },
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description:
        "Country code + number, digits only. Example: 919876543210 (no + or spaces).",
      validation: (rule) =>
        rule
          .required()
          .regex(/^[0-9]{7,15}$/, {
            name: "phone",
            invert: false,
          })
          .error("Enter digits only, including country code (e.g. 919876543210)."),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      description: "Displayed on the contact page (can include + and spaces).",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "instagram",
      title: "Instagram Link",
      type: "url",
    }),
    defineField({
      name: "facebook",
      title: "Facebook Link",
      type: "url",
    }),
    defineField({
      name: "youtube",
      title: "YouTube Link",
      type: "url",
    }),
    defineField({
      name: "announcement",
      title: "Header Announcement Text",
      type: "string",
      description:
        "Scrolling/announcement bar at the very top of the site. Leave blank to hide it.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
