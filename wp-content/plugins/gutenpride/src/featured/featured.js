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
    { columns: 3 },
    [
      [
        "core/column",
        {},
        [
          ["core/image", { align: "center", width: 40 }],
          [
            "core/heading",
            {
              align: "center",
              content: "Title",
            },
          ],
          [
            "core/paragraph",
            {
              align: "center",
              content: "Add Descriptions",
            },
          ],
        ],
      ],
      [
        "core/column",
        {},
        [
          ["core/image", { align: "center", width: 40 }],
          [
            "core/heading",
            {
              align: "center",
              content: "Title",
            },
          ],
          [
            "core/paragraph",
            {
              align: "center",
              content: "Add Descriptions",
            },
          ],
        ],
      ],
      [
        "core/column",
        {},
        [
          ["core/image", { align: "center", width: 40 }],
          [
            "core/heading",
            {
              align: "center",
              content: "Title",
            },
          ],
          [
            "core/paragraph",
            {
              align: "center",
              content: "Add Descriptions",
            },
          ],
        ],
      ],
    ],
  ],
];

registerBlockType("cgb/block-customblock-featured", {
  title: __("customblock - featured "),
  icon: "tools",
  category: "customblock",
  keywords: [__("customblock — featured ")],

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
