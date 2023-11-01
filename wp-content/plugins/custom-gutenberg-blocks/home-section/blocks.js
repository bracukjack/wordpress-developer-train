(function () {
  var el = wp.element.createElement;
  var RichText = wp.blockEditor.RichText;

  wp.blocks.registerBlockType("custom-gutenberg-blocks/home-section", {
    title: "Home Section",
    icon: "align-center",
    category: "common",
    attributes: {
      title: {
        type: "array",
        source: "children",
        selector: "h1",
      },
      description: {
        type: "array",
        source: "children",
        selector: "p",
      },
      buttonText: {
        type: "array",
        source: "children",
        selector: "a.btn",
      },
      buttonLink: {
        type: "string",
        selector: "a.btn",
        attribute: "href",
      },
      imageUrl: {
        type: "string",
        default: "../assets/home.svg",
      },
    },
    edit: function (props) {
      var attributes = props.attributes;

      function onChangeTitle(newTitle) {
        props.setAttributes({ title: newTitle });
      }

      function onChangeDescription(newDescription) {
        props.setAttributes({ description: newDescription });
      }

      function onChangeButtonText(newButtonText) {
        props.setAttributes({ buttonText: newButtonText });
      }

      function onChangeButtonLink(newButtonLink) {
        props.setAttributes({ buttonLink: newButtonLink });
      }

      function onSelectImage(newImageUrl) {
        props.setAttributes({ imageUrl: newImageUrl });
      }

      function onTextColorChange(newColor) {
        props.setAttributes({ buttonTextColor: newColor });
      }

      return el(
        "div",
        { className: "container py-5 text-center" },
        el(
          "div",
          { className: "row gx-5 align-items-center" },
          el(
            "div",
            { className: "col-12 col-lg-5 text-start" },
            el(
              "div",
              { className: "d-flex flex-column align-items-start gap-4" },
              el(RichText, {
                tagName: "h1",
                value: attributes.title,
                onChange: onChangeTitle,
                placeholder: "Enter title...",
              }),
              el(RichText, {
                tagName: "p",
                value: attributes.description,
                onChange: onChangeDescription,
                placeholder: "Enter description...",
              }),
              el(
                "a",
                {
                  className: "btn btn-orange text-white py-2 px-3 rounded-0",
                  href: attributes.buttonLink,
                  style: { color: attributes.buttonTextColor },
                },
                el(RichText, {
                  tagName: "span",
                  value: attributes.buttonText,
                  onChange: onChangeButtonText,
                  placeholder: "Button Text",
                })
              ),
              el("ColorPalette", {
                value: attributes.buttonTextColor,
                onChange: onTextColorChange,
              })
            )
          ),
          el(
            "div",
            { className: "col-12 col-lg-7 d-flex justify-content-center" },
            el("img", {
              src: attributes.imageUrl,
              alt: "home",
              className: "img-fluid d-block object-fit-contain",
              onChange: onSelectImage,
            })
          )
        )
      );
    },

    // ...

    save: function (props) {
      var attributes = props.attributes;
      var imageUrl = attributes.imageUrl
        ? wp.url.home + attributes.imageUrl
        : "";

      return el(
        "div",
        { className: "container py-5 text-center" },
        el(
          "div",
          { className: "row gx-5 align-items-center" },
          el(
            "div",
            { className: "col-12 col-lg-5 text-start" },
            el(
              "div",
              { className: "d-flex flex-column align-items-start gap-4" },
              el("h1", null, attributes.title),
              el("p", { className: "text-secondary" }, attributes.description),
              el(
                "a",
                {
                  href: attributes.buttonLink,
                  className: "btn btn-orange text-white py-2 px-3 rounded-0",
                  style: { color: attributes.buttonTextColor },
                },
                attributes.buttonText
              )
            )
          ),
          el(
            "div",
            { className: "col-12 col-lg-7 d-flex justify-content-center" },
            el("img", {
              src: imageUrl,
              alt: "home",
              className: "img-fluid d-block object-fit-contain",
            })
          )
        )
      );
    },
  });
})(window.wp.blocks, window.wp.editor, window.wp.i18n, window.wp.element);
