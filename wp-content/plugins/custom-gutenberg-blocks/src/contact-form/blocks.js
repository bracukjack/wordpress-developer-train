(function () {
  var el = wp.element.createElement;
  var registerBlockType = wp.blocks.registerBlockType;
  var InspectorControls = wp.editor.InspectorControls;
  var TextControl = wp.components.TextControl;
  var TextareaControl = wp.components.TextareaControl;

  registerBlockType("custom-gutenberg-blocks/contact-form", {
    title: "Contact Form",
    icon: "email-alt",
    category: "common",
    attributes: {
      nameLabel: {
        type: "string",
        default: "Your Name",
      },
      emailLabel: {
        type: "string",
        default: "Your Email",
      },
      phoneLabel: {
        type: "string",
        default: "Your Phone",
      },
      messageLabel: {
        type: "string",
        default: "Your Message",
      },
      buttonText: {
        type: "string",
        default: "Submit",
      },
    },
    edit: function (props) {
      var attributes = props.attributes;

      function onLabelChange(field, value) {
        var updatedAttributes = { ...attributes };
        updatedAttributes[field] = value;
        props.setAttributes(updatedAttributes);
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
            label: "Name Label",
            value: attributes.nameLabel,
            onChange: (value) => onLabelChange("nameLabel", value),
          }),
          el(TextControl, {
            label: "Email Label",
            value: attributes.emailLabel,
            onChange: (value) => onLabelChange("emailLabel", value),
          }),
          el(TextControl, {
            label: "Phone Label",
            value: attributes.phoneLabel,
            onChange: (value) => onLabelChange("phoneLabel", value),
          }),
          el(TextareaControl, {
            label: "Message Label",
            value: attributes.messageLabel,
            onChange: (value) => onLabelChange("messageLabel", value),
          }),
          el(TextControl, {
            label: "Button Text",
            value: attributes.buttonText,
            onChange: (value) => onLabelChange("buttonText", value),
          })
        ),
        el(
          "div",
          { className: "container my-5 p-2 p-sm-5" },
          el(
            "form",
            { action: "", className: "custom-form" },
            el(
              "div",
              { className: "mb-3" },
              el("label", { className: "form-label" }, attributes.nameLabel),
              el("input", {
                type: "text",
                className:
                  "form-control form-control-lg bg-light rounded-0 border-1 border-dark",
              })
            ),
            el(
              "div",
              { className: "mb-3" },
              el("label", { className: "form-label" }, attributes.emailLabel),
              el("input", {
                type: "email",
                className:
                  "form-control form-control-lg bg-light rounded-0 border-1 border-dark",
              })
            ),
            el(
              "div",
              { className: "mb-3" },
              el("label", { className: "form-label" }, attributes.phoneLabel),
              el("input", {
                type: "number",
                className:
                  "form-control form-control-lg bg-light rounded-0 border-1 border-dark",
              })
            ),
            el(
              "div",
              { className: "mb-3" },
              el("label", { className: "form-label" }, attributes.messageLabel),
              el("textarea", {
                className:
                  "form-control form-control-lg bg-light rounded-0 border-1 border-dark",
                rows: "3",
              })
            ),
            el(
              "button",
              {
                type: "submit",
                className: "btn btn-blue text-white py-2 px-3 rounded-0",
              },
              attributes.buttonText
            )
          )
        )
      );
    },
    save: function (props) {
      var attributes = props.attributes;

      return el(
        "div",
        { className: "container my-5 p-2 p-sm-5" },
        el(
          "form",
          { action: "", className: "custom-form" },
          el(
            "div",
            { className: "mb-3" },
            el("label", { className: "form-label" }, attributes.nameLabel),
            el("input", {
              type: "text",
              className:
                "form-control form-control-lg bg-light rounded-0 border-1 border-dark",
            })
          ),
          el(
            "div",
            { className: "mb-3" },
            el("label", { className: "form-label" }, attributes.emailLabel),
            el("input", {
              type: "email",
              className:
                "form-control form-control-lg bg-light rounded-0 border-1 border-dark",
            })
          ),
          el(
            "div",
            { className: "mb-3" },
            el("label", { className: "form-label" }, attributes.phoneLabel),
            el("input", {
              type: "number",
              className:
                "form-control form-control-lg bg-light rounded-0 border-1 border-dark",
            })
          ),
          el(
            "div",
            { className: "mb-3" },
            el("label", { className: "form-label" }, attributes.messageLabel),
            el("textarea", {
              className:
                "form-control form-control-lg bg-light rounded-0 border-1 border-dark",
              rows: "3",
            })
          ),
          el(
            "button",
            {
              type: "submit",
              className: "btn btn-blue text-white py-2 px-3 rounded-0",
            },
            attributes.buttonText
          )
        )
      );
    },
  });
})();
