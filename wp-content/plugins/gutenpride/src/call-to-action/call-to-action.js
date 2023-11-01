/**
 * BLOCK: customblock
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

const TEMPLATE = [
  [
    "core/columns",
    { columns: 2 },
    [
      [
        "core/column",
        {},
        [
          [
            "core/heading",
            {
              align: "left",
              className: "heading-cta",
              content: "We help you find the best solution.",
            },
          ],
          [
            "core/paragraph",
            {
              align: "left",
              className: "paragraph-cta",
              content:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            },
          ],
          [
            "core/button",
            {
              align: "left",
              className: "button-cta",
              text: "Get A Quote",
              url: "widyadnyana.my.id",
            },
          ],
        ],
      ],
      [
        "core/column",
        {},
        [
          [
            "core/image",
            { align: "center", className: "img-icon", width: 200 },
          ],
        ],
      ],
    ],
  ],
];

registerBlockType("cgb/block-customblock", {
  title: __("customblock - CTA"),
  icon: "shield",
  category: "customblock",
  keywords: [__("customblock — CTA")],

  edit: (props) => {
    return (
      <div className={props.className}>
        <InnerBlocks template={TEMPLATE} templateLock="all" />
      </div>
    );
  },

  save: (props) => {
    return (
      <div className={props.className}>
        <InnerBlocks.Content />
      </div>
    );
  },
});
