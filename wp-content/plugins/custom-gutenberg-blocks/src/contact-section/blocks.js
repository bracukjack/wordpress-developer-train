(function () {
  var el = wp.element.createElement;
  var InspectorControls = wp.editor.InspectorControls;
  var TextControl = wp.components.TextControl;

  wp.blocks.registerBlockType("custom-gutenberg-blocks/contact-section", {
    title: "Contact Section",
    icon: "admin-comments",
    category: "common",
    attributes: {
      title: {
        type: "string",
        default: "Ready to get started?",
      },
      description: {
        type: "string",
        default:
          "Take control of your Business Data. Try saas to make your business better",
      },
      buttonText: {
        type: "string",
        default: "Get A Quote",
      },
      buttonLink: {
        type: "string",
        default: "",
      },
    },
    edit: function (props) {
      var attributes = props.attributes;

      function onTitleChange(newTitle) {
        props.setAttributes({ title: newTitle });
      }

      function onDescriptionChange(newDescription) {
        props.setAttributes({ description: newDescription });
      }

      function onButtonTextChange(newButtonText) {
        props.setAttributes({ buttonText: newButtonText });
      }

      function onButtonLinkChange(newButtonLink) {
        props.setAttributes({ buttonLink: newButtonLink });
      }

      return el(
        "div",
        null,
        el(
          InspectorControls,
          {
            key: "inspector",
          },
          el(TextControl, {
            label: "Title",
            value: attributes.title,
            onChange: onTitleChange,
          }),
          el(TextControl, {
            label: "Description",
            value: attributes.description,
            onChange: onDescriptionChange,
          }),
          el(TextControl, {
            label: "Button Text",
            value: attributes.buttonText,
            onChange: onButtonTextChange,
          }),
          el(TextControl, {
            label: "Button Link",
            value: attributes.buttonLink,
            onChange: onButtonLinkChange,
          })
        ),
        el(
          "section",
          null,
          el(
            "div",
            { className: "mt-5 py-5 bg-gradient-orange" },
            el(
              "div",
              { className: "container py-5" },
              el(
                "div",
                { className: "text-white flex-column text-center" },
                el(
                  "h2",
                  { className: "fw-bold fs-2 text-white" },
                  attributes.title
                ),
                el(
                  "p",
                  { className: "fw-light fs-6 text-white" },
                  attributes.description
                ),
                el(
                  "a",
                  {
                    href: attributes.buttonLink,
                    className: "btn btn-blue py-2 px-3 text-white rounded-0",
                  },
                  attributes.buttonText
                )
              )
            )
          )
        )
      );
    },
    save: function (props) {
      var attributes = props.attributes;

      return el(
        "section",
        null,
        el(
          "div",
          { className: "mt-5 py-5 bg-gradient-orange" },
          el(
            "div",
            { className: "container py-5" },
            el(
              "div",
              { className: "text-white flex-column text-center" },
              el(
                "h2",
                { className: "fw-bold fs-2 text-white" },
                attributes.title
              ),
              el(
                "p",
                { className: "fw-light fs-6 text-white" },
                attributes.description
              ),
              el(
                "a",
                {
                  href: attributes.buttonLink,
                  className: "btn btn-blue py-2 px-3 text-white rounded-0",
                },
                attributes.buttonText
              )
            )
          )
        )
      );
    },
  });
})();
