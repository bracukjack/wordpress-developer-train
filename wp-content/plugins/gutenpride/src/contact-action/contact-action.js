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
    { columns: 1, className: "wp-block-widiblocks-contact" },
    [
      [
        "core/column",
        { className: "wp-block-widiblocks-contact" },
        [
          [
            "core/heading",
            {
              align: "center",
              className: "heading-contact",
              content: "Add Title",
            },
          ],
          [
            "core/paragraph",
            {
              align: "center",
              className: "paragraph-contact",
              content: "Add Description",
            },
          ],
          [
            "core/button",
            {
              align: "center",
              className: "button-contact",
              text: "Get A Quote",
              url: "widyadnyana.my.id",
            },
          ],
        ],
      ],
    ],
  ],
];

registerBlockType("cgb/block-customblock-contact", {
  title: __("customblock - contact"),
  icon: "id",
  category: "customblock",
  keywords: [__("customblock — contact")],

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
