/**
 * BLOCK: customblocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "../../css/custom.css";
import "../../scss/custom.scss";

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
        {
          align: "left",
        },
        [
          [
            "core/heading",
            {
              align: "left",
              className: "h1",
              content: "We help you find the best solution",
            },
          ],
          [
            "core/paragraph",
            {
              align: "left",
              className: "h6",
              content:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            },
          ],
          [
            "core/button",
            {
              align: "left",
              className: "btn btn-orange text-white py-2 px-3 rounded-0",
              text: "Get A Quote",
              url: "https://google.com",
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
            {
              align: "center",
              className: "img-fluid d-block object-fit-contain",
              width: 400,
            },
          ],
        ],
      ],
    ],
  ],
];

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType("cgb/home-section", {
  title: __("customblocks - HomeSection "),
  icon: "shield",
  category: "CustomBlocks",
  keywords: [__("customblocks — HomeSection")],

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Component.
   */
  edit: (props) => {
    return (
      <div className={props.className}>
        <InnerBlocks template={TEMPLATE} templateLock="all" />
      </div>
    );
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   *
   * @param {Object} props Props.
   * @returns {Mixed} JSX Frontend HTML.
   */

  save: (props) => {
    return (
      <div className={props.className}>
        <InnerBlocks.Content />
      </div>
    );
  },
});
