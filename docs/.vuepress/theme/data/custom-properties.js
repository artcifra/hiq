module.exports = [
    {
        name: '--hiq-color-gray-1',
        type: 'color',
        category: 'gray-palette',
        description: 'The first gray in the grayscale palette.',
        default: 'hsl(220, 10%, 5%)'
    },
    {
        name: '--hiq-color-gray-2',
        type: 'color',
        category: 'gray-palette',
        description:
            'The second gray in the grayscale palette. By default, used as the document text color.',
        default: 'hsl(220, 10%, 10%)'
    },
    {
        name: '--hiq-color-gray-3',
        type: 'color',
        category: 'gray-palette',
        description: 'The third gray in the grayscale palette.',
        default: 'hsl(220, 10%, 20%)'
    },
    {
        name: '--hiq-color-gray-4',
        type: 'color',
        category: 'gray-palette',
        description: 'The fourth gray in the grayscale palette.',
        default: 'hsl(220, 10%, 40%)'
    },
    {
        name: '--hiq-color-gray-5',
        type: 'color',
        category: 'gray-palette',
        description:
            'The fifth gray in the grayscale palette. By default, used as the disabled color.',
        default: 'hsl(220, 10%, 60%)'
    },
    {
        name: '--hiq-color-gray-6',
        type: 'color',
        category: 'gray-palette',
        description:
            'The sixth gray in the grayscale palette. By default, used as the border color.',
        default: 'hsl(220, 10%, 90%)'
    },
    {
        name: '--hiq-color-gray-7',
        type: 'color',
        category: 'gray-palette',
        description: 'The seventh gray in the grayscale palette.',
        default: 'hsl(220, 10%, 95%)'
    },
    {
        name: '--hiq-color-gray-8',
        type: 'color',
        category: 'gray-palette',
        description: 'The eight gray in the grayscale palette.',
        default: 'hsl(220, 10%, 98%)'
    },
    {
        name: '--hiq-color-primary',
        type: 'color',
        category: 'semantic-palette',
        description:
            "The primary color, often defined as the 'brand' color. By default, used for links and buttons.",
        default: 'hsl(210, 100%, 50%)'
    },
    {
        name: '--hiq-color-success',
        type: 'color',
        category: 'semantic-palette',
        description:
            'The color used to define success states in meter elements.',
        default: 'hsl(158, 73%, 48%)'
    },
    {
        name: '--hiq-color-warning',
        type: 'color',
        category: 'semantic-palette',
        description:
            'The color used to define warning states in meter elements.',
        default: 'hsl(46, 97%, 64%)'
    },
    {
        name: '--hiq-color-danger',
        type: 'color',
        category: 'semantic-palette',
        description:
            'The color used to define danger states in meter elements and invalid inputs.',
        default: 'hsl(352, 95%, 61%)'
    },
    {
        name: '--hiq-html-background-color',
        type: 'color',
        category: 'applied-colors',
        description:
            'Sets the background color on the html element, which is visible when scrolling past the beginning and end of the document.',
        default: 'white'
    },
    {
        name: '--hiq-body-background-color',
        type: 'color',
        category: 'applied-colors',
        description: 'Sets the background color on the document body.',
        default: 'white'
    },
    {
        name: '--hiq-disabled-border-color',
        type: 'color',
        category: 'applied-colors',
        description:
            'Sets the border color for buttons and inputs that have the disabled attribute.',
        default: 'hsl(220, 10%, 90%)'
    },
    {
        name: '--hiq-disabled-background-color',
        type: 'color',
        category: 'applied-colors',
        description:
            'Sets the border color for buttons and inputs that have the disabled attribute.',
        default: 'hsl(220, 10%, 95%)'
    },
    {
        name: '--hiq-disabled-text-color',
        type: 'color',
        category: 'applied-colors',
        description:
            'Sets the text color for buttons and inputs that have the disabled attribute.',
        default: 'hsl(220, 10%, 60%)'
    },
    {
        name: '--hiq-max-container-width',
        type: 'number',
        category: 'containers',
        description:
            'Sets the maximum width of elements with the .container class.'
    },
    {
        name: '--hiq-container-horizontal-gap',
        type: 'number',
        category: 'containers',
        description:
            'Sets the left and right gap between the container edge and the parent element.'
    },
    {
        name: '--hiq-block-element-margin-bottom',
        type: 'number',
        category: 'margins',
        description: 'Sets the bottom margin on numerous block-level elements.'
    },
    {
        name: '--hiq-border-radius',
        type: 'number',
        category: 'borders-outlines',
        description:
            'Sets the base border radius that is applied to buttons, inputs, code blocks and other elements by default.'
    },
    {
        name: '--hiq-outline-width',
        type: 'number',
        category: 'borders-outlines',
        description:
            'Sets the width of the outline that appears on focusable elements when focused (this is actually created with box-shadow).'
    },
    {
        name: '--hiq-outline-color',
        type: 'color',
        category: 'borders-outlines',
        description:
            'Sets the color of the outline that appears on focusable elements when focused.',
        default: 'hsl(210, 100%, 85%)'
    },
    {
        name: '--hiq-speed',
        type: 'text',
        category: 'animation-controls',
        description:
            'Sets the default transition speed for hover, focus and active states on links, buttons and inputs.'
    },
    {
        name: '--hiq-easing',
        type: 'text',
        category: 'animation-controls',
        description:
            'Defines the default easing curve for hover, focus, and active states on links, buttons and inputs.'
    },
    {
        name: '--hiq-text-rendering',
        type: 'text',
        category: 'global-typography-settings',
        description:
            'Sets the text-rendering property that tells the browser what to optimize for when rendering text.'
    },
    {
        name: '--hiq-letter-spacing-base',
        type: 'number',
        category: 'global-typography-settings',
        description:
            'The default letter-spacing assigned to the entire document.'
    },
    {
        name: '--hiq-text-color',
        type: 'color',
        category: 'global-typography-settings',
        description:
            'Sets the default color for all text in the document, including body copy and headings.'
    },
    {
        name: '--hiq-font-family-base',
        type: 'text',
        category: 'font-families',
        description:
            'Sets the default font family used for all elements, except for code, kbd, samp and pre.'
    },
    {
        name: '--hiq-font-family-monospace',
        type: 'text',
        category: 'font-families',
        description:
            'Sets the default monospaced font family, used in code, kbd, samp and pre elements.'
    },
    {
        name: '--hiq-unitless-min-font-size',
        type: 'number',
        category: 'responsive-typography',
        description:
            "The minimum font size in pixels. Type will be no smaller than this. Must not include the term 'px'."
    },
    {
        name: '--hiq-unitless-max-font-size',
        type: 'number',
        category: 'responsive-typography',
        description:
            "The maximum font size in pixels. Type will be no larger than this. Must not include the term 'px'."
    },
    {
        name: '--hiq-unitless-lower-font-range',
        type: 'number',
        category: 'responsive-typography',
        description:
            "The viewport width in pixels at which font size starts increasing. At smaller widths, type remains static. Must not include the term 'px'."
    },
    {
        name: '--hiq-unitless-upper-font-range',
        type: 'number',
        category: 'responsive-typography',
        description:
            "The viewport width in pixels at which font size stops increasing. At larger widths, type remains static. Must not include the term 'px'."
    },
    {
        name: '--hiq-font-size-1',
        type: 'number',
        category: 'type-scale',
        description:
            'First and largest size in the type scale. Applied by default to the h1 element.'
    },
    {
        name: '--hiq-font-size-2',
        type: 'number',
        category: 'type-scale',
        description:
            'Second size in the type scale. Applied by default to the h2 element.'
    },
    {
        name: '--hiq-font-size-3',
        type: 'number',
        category: 'type-scale',
        description:
            'Third size in the type scale. Applied by default to the h3 element.'
    },
    {
        name: '--hiq-font-size-4',
        type: 'number',
        category: 'type-scale',
        description:
            'Fourth size in the type scale. Applied by default to the h4 element.'
    },
    {
        name: '--hiq-font-size-5',
        type: 'number',
        category: 'type-scale',
        description:
            'Fifth size in the type scale. Applied by default to the h5 element.'
    },
    {
        name: '--hiq-font-size-6',
        type: 'number',
        category: 'type-scale',
        description:
            'Sixth size in the type scale. Applied by default to the h6 element.'
    },
    {
        name: '--hiq-font-size-base',
        type: 'number',
        category: 'type-scale',
        description:
            'Base font size for document. All inline elements and paragraphs receive this type size by default.'
    },
    {
        name: '--hiq-font-size-large',
        type: 'number',
        category: 'type-scale',
        description:
            'Size slightly larger than the base font size. Set to the fourth font size by default.'
    },
    {
        name: '--hiq-font-size-small',
        type: 'number',
        category: 'type-scale',
        description:
            'Size slightly smaller than the base font size. The small element is assigned this size. Set to the sixth font size by default.'
    },
    {
        name: '--hiq-min-font-size-1',
        type: 'number',
        category: 'type-scale',
        description:
            'The minimum size (in px) that the first font size can reach. Set to the primary first font size by default.'
    },
    {
        name: '--hiq-max-font-size-1',
        type: 'number',
        category: 'type-scale',
        description:
            'The maximum size (in px) that the first font size can reach. Set to the primary first font size by default.'
    },
    {
        name: '--hiq-min-font-size-2',
        type: 'number',
        category: 'type-scale',
        description:
            'The minimum size (in px) that the second font size can reach. Set to the primary second font size by default.'
    },
    {
        name: '--hiq-max-font-size-2',
        type: 'number',
        category: 'type-scale',
        description:
            'The maximum size (in px) that the second font size can reach. Set to the primary second font size by default.'
    },
    {
        name: '--hiq-min-font-size-3',
        type: 'number',
        category: 'type-scale',
        description:
            'The minimum size (in px) that the third font size can reach. Set to the primary third font size by default.'
    },
    {
        name: '--hiq-max-font-size-3',
        type: 'number',
        category: 'type-scale',
        description:
            'The maximum size (in px) that the third font size can reach. Set to the primary third font size by default.'
    },
    {
        name: '--hiq-min-font-size-4',
        type: 'number',
        category: 'type-scale',
        description:
            'The minimum size (in px) that the fourth font size can reach. Set to the primary fourth font size by default.'
    },
    {
        name: '--hiq-max-font-size-4',
        type: 'number',
        category: 'type-scale',
        description:
            'The maximum size (in px) that the fourth font size can reach. Set to the primary fourth font size by default.'
    },
    {
        name: '--hiq-min-font-size-5',
        type: 'number',
        category: 'type-scale',
        description:
            'The minimum size (in px) that the fifth font size can reach. Set to the primary fifth font size by default.'
    },
    {
        name: '--hiq-max-font-size-5',
        type: 'number',
        category: 'type-scale',
        description:
            'The maximum size (in px) that the fifth font size can reach. Set to the primary fifth font size by default.'
    },
    {
        name: '--hiq-min-font-size-6',
        type: 'number',
        category: 'type-scale',
        description:
            'The minimum size (in px) that the sixth font size can reach. Set to the primary sixth font size by default.'
    },
    {
        name: '--hiq-max-font-size-6',
        type: 'number',
        category: 'type-scale',
        description:
            'The maximum size (in px) that the sixth font size can reach. Set to the primary sixth font size by default.'
    },
    {
        name: '--hiq-heading-font-weight',
        type: 'number',
        category: 'headings',
        description:
            'The font weight assigned to h1, h2, h3, h4, h5, and h6 elements.'
    },
    {
        name: '--hiq-line-height-base',
        type: 'number',
        category: 'line-height',
        description: 'Base line height for all elements, except for headings.'
    },
    {
        name: '--hiq-heading-line-height',
        type: 'number',
        category: 'line-height',
        description: 'Line height for h1, h2, h3, h4, h5, and h6 elements.'
    },
    {
        name: '--hiq-font-weight-light',
        type: 'number',
        category: 'font-weights',
        description: 'The lightest weight in the default font weight range.'
    },
    {
        name: '--hiq-font-weight-normal',
        type: 'number',
        category: 'font-weights',
        description:
            "Corresponds to a 'normal' font weight. The majority of elements receive this weight by default."
    },
    {
        name: '--hiq-font-weight-medium',
        type: 'number',
        category: 'font-weights',
        description: 'A slightly heavier weight than normal.'
    },
    {
        name: '--hiq-font-weight-semibold',
        type: 'number',
        category: 'font-weights',
        description:
            'The second-to-heaviest weight in the default font weight range.'
    },
    {
        name: '--hiq-font-weight-bold',
        type: 'number',
        category: 'font-weights',
        description: 'The heaviest weight in the default font weight range.'
    },
    {
        name: '--hiq-font-weight-base',
        type: 'number',
        category: 'font-weights',
        description:
            'The font weight assigned to the majority of elements. This is set to the normal font weight by default.'
    },
    {
        name: '--hiq-mark-color',
        type: 'color',
        category: 'inline-text-elements',
        description:
            'Sets the background color for the mark element, which represents highlighted text.',
        default: 'hsl(50, 81%, 94%)'
    },
    {
        name: '--hiq-deleted-color',
        type: 'color',
        category: 'inline-text-elements',
        description:
            'Sets the background color for the del element, which represents a range of text that has been deleted for the document.',
        default: 'hsl(331, 93%, 67%)'
    },
    {
        name: '--hiq-inserted-color',
        type: 'color',
        category: 'inline-text-elements',
        description:
            'Sets the background color for the ins element, which represents a range of text that has been added to the document.',
        default: 'hsl(210, 100%, 95%)'
    },
    {
        name: '--hiq-selection-color',
        type: 'color',
        category: 'user-selection',
        description:
            'Sets the background color for a user selection within the document.',
        default: 'hsl(210, 100%, 90%)'
    },
    {
        name: '--hiq-list-margin-left',
        local: '--list-margin-left',
        type: 'number',
        category: 'lists',
        description: 'Sets the left margin for ul and ol elements.'
    },
    {
        name: '--hiq-unordered-list-style',
        local: '--unordered-list-style',
        type: 'text',
        category: 'lists',
        description: 'Sets the bullet style for ul elements.'
    },
    {
        name: '--hiq-description-list-title-font-weight',
        local: '--description-list-title-font-weight',
        type: 'number',
        category: 'description-lists',
        description: 'The font weight assigned to the dt element.'
    },
    {
        name: '--hiq-blockquote-font-size',
        local: '--blockquote-font-size',
        type: 'number',
        category: 'blockquotes',
        description: 'Sets the font-size for the p element within a blockquote.'
    },
    {
        name: '--hiq-blockquote-line-height',
        local: '--blockquote-line-height',
        type: 'number',
        category: 'blockquotes',
        description:
            'Sets the line-height for the p element within a blockquote.'
    },
    {
        name: '--hiq-blockquote-citation-color',
        local: '--blockquote-citation-color',
        type: 'color',
        category: 'blockquotes',
        description: 'Sets the color for the cite element within a blockquote.'
    },
    {
        name: '--hiq-horizontal-rule-height',
        local: '--horizontal-rule-height',
        type: 'number',
        category: 'horizontal-rules',
        description: 'Sets the thickness of a horizontal rule.'
    },
    {
        name: '--hiq-horizontal-rule-color',
        local: '--horizontal-rule-color',
        type: 'color',
        category: 'horizontal-rules',
        description: 'Sets the color of a horizontal rule.'
    },
    {
        name: '--hiq-link-color',
        local: '--link-color',
        type: 'color',
        category: 'links',
        description: 'Sets the text color for static state anchor elements.'
    },
    {
        name: '--hiq-link-hover-color',
        local: '--link-hover-color',
        type: 'color',
        category: 'links',
        description: 'Sets the text color for hovered anchor elements.'
    },
    {
        name: '--hiq-link-active-color',
        local: '--link-active-color',
        type: 'color',
        category: 'links',
        description: 'Sets the text color for active anchor elements.'
    },
    {
        name: '--hiq-link-visited-color',
        local: '--link-visited-color',
        type: 'color',
        category: 'links',
        description: 'Sets the text color for visited anchor elements.'
    },
    {
        name: '--hiq-link-visited-hover-color',
        local: '--link-visited-hover-color',
        type: 'color',
        category: 'links',
        description: 'Sets the text color for hovered visited anchor elements.'
    },
    {
        name: '--hiq-link-visited-active-color',
        local: '--link-visited-active-color',
        type: 'color',
        category: 'links',
        description: 'Sets the text color for active visited anchor elements.'
    },
    {
        name: '--hiq-link-text-decoration',
        local: '--link-text-decoration',
        type: 'text',
        category: 'links',
        description:
            'Sets the text decoration (underlined or otherwise) for anchor elements.'
    },
    {
        name: '--hiq-button-height',
        local: '--button-height',
        type: 'number',
        category: 'buttons',
        description: 'Sets the height for buttons and button-like elements.'
    },
    {
        name: '--hiq-button-vertical-padding',
        local: '--button-vertical-padding',
        type: 'number',
        category: 'buttons',
        description: 'Sets the top and bottom padding for buttons.'
    },
    {
        name: '--hiq-button-horizontal-padding',
        local: '--button-horizontal-padding',
        type: 'number',
        category: 'buttons',
        description: 'Sets the left and right padding for buttons.'
    },
    {
        name: '--hiq-button-border-width',
        local: '--button-border-width',
        type: 'number',
        category: 'buttons',
        description: 'Sets the border width for buttons.'
    },
    {
        name: '--hiq-button-border-radius',
        local: '--button-border-radius',
        type: 'number',
        category: 'buttons',
        description: 'Sets the border-radius for buttons.'
    },
    {
        name: '--hiq-button-font-weight',
        local: '--button-font-weight',
        type: 'number',
        category: 'buttons',
        description: 'Sets the font weight for button text.'
    },
    {
        name: '--hiq-button-border-color',
        local: '--button-border-color',
        type: 'color',
        category: 'buttons',
        description: 'Sets the border color for static state buttons.'
    },
    {
        name: '--hiq-button-background-color',
        local: '--button-background-color',
        type: 'color',
        category: 'buttons',
        description: 'Sets the background color for static state buttons.'
    },
    {
        name: '--hiq-button-text-color',
        local: '--button-text-color',
        type: 'color',
        category: 'buttons',
        description: 'Sets the text color for static state buttons.'
    },
    {
        name: '--hiq-button-hover-border-color',
        local: '--button-hover-border-color',
        type: 'color',
        category: 'buttons',
        description: 'Sets the border color for hovered buttons.'
    },
    {
        name: '--hiq-button-hover-background-color',
        local: '--button-hover-background-color',
        type: 'color',
        category: 'buttons',
        description: 'Sets the background color for hovered buttons.'
    },
    {
        name: '--hiq-button-hover-text-color',
        local: '--button-hover-text-color',
        type: 'color',
        category: 'buttons',
        description: 'Sets the text color for hovered buttons.'
    },
    {
        name: '--hiq-button-active-border-color',
        local: '--button-active-border-color',
        type: 'color',
        category: 'buttons',
        description: 'Sets the border color for active buttons.'
    },
    {
        name: '--hiq-button-active-background-color',
        local: '--button-active-background-color',
        type: 'color',
        category: 'buttons',
        description: 'Sets the background color for active buttons.'
    },
    {
        name: '--hiq-button-active-text-color',
        local: '--button-active-text-color',
        type: 'color',
        category: 'buttons',
        description: 'Sets the text color for active buttons.'
    },
    {
        name: '--hiq-code-padding-vertical',
        local: '--code-padding-vertical',
        type: 'number',
        category: 'inline-code',
        description: 'Sets the top and bottom padding for code  elements.'
    },
    {
        name: '--hiq-code-padding-horizontal',
        local: '--code-padding-horizontal',
        type: 'number',
        category: 'inline-code',
        description: 'Sets the left and right padding for code  elements.'
    },
    {
        name: '--hiq-code-border-color',
        local: '--code-border-color',
        type: 'color',
        category: 'inline-code',
        description: 'Sets the border color for code elements.'
    },
    {
        name: '--hiq-code-font-size',
        local: '--code-font-size',
        type: 'number',
        category: 'inline-code',
        description: 'Sets the font size for code, kbd, pre, and samp elements.'
    },
    {
        name: '--hiq-code-background-color',
        local: '--code-background-color',
        type: 'color',
        category: 'inline-code',
        description: 'Sets the background color for code  elements.'
    },
    {
        name: '--hiq-code-text-color',
        local: '--code-text-color',
        type: 'color',
        category: 'inline-code',
        description: 'Sets the text color for code elements.'
    },
    {
        name: '--hiq-pre-padding-vertical',
        local: '--pre-padding-vertical',
        type: 'number',
        category: 'code-blocks',
        description: 'Sets the top and bottom padding for pre elements.'
    },
    {
        name: '--hiq-pre-padding-horizontal',
        local: '--pre-padding-horizontal',
        type: 'number',
        category: 'code-blocks',
        description: 'Sets the left and right padding for pre elements.'
    },
    {
        name: '--hiq-pre-border-color',
        local: '--pre-border-color',
        type: 'color',
        category: 'code-blocks',
        description: 'Sets the border color for pre elements.'
    },
    {
        name: '--hiq-pre-background-color',
        local: '--pre-background-color',
        type: 'color',
        category: 'code-blocks',
        description: 'Sets the background color for pre elements.'
    },
    {
        name: '--hiq-pre-text-color',
        local: '--pre-text-color',
        type: 'color',
        category: 'code-blocks',
        description: 'Sets the text color for pre elements.'
    },
    {
        name: '--hiq-kbd-padding-vertical',
        local: '--kbd-padding-vertical',
        type: 'number',
        category: 'user-input',
        description: 'Sets the top and bottom padding for kbd elements.'
    },
    {
        name: '--hiq-kbd-padding-horizontal',
        local: '--kbd-padding-horizontal',
        type: 'number',
        category: 'user-input',
        description: 'Sets the left and right padding for kbd elements.'
    },
    {
        name: '--hiq-kbd-border-color',
        local: '--kbd-border-color',
        type: 'color',
        category: 'user-input',
        description: 'Sets the border color for kbd elements.'
    },
    {
        name: '--hiq-nested-kbd-font-weight',
        local: '--nested-kbd-font-weight',
        type: 'number',
        category: 'user-input',
        description:
            'Sets the font weight for kbd elements that are nested within other kbd elements.'
    },
    {
        name: '--hiq-kbd-background-color',
        local: '--kbd-background-color',
        type: 'color',
        category: 'user-input',
        description: 'Sets the background-color for kbd elements.'
    },
    {
        name: '--hiq-kbd-text-color',
        local: '--kbd-text-color',
        type: 'color',
        category: 'user-input',
        description: 'Sets the text color for kbd elements.'
    },
    {
        name: '--hiq-figcaption-margin-top',
        local: '--figcaption-margin-top',
        type: 'number',
        category: 'figures',
        description:
            'Sets the top margin for figcaptions to separate them from the content of the figure.'
    },
    {
        name: '--hiq-figcaption-font-weight',
        local: '--figcaption-font-weight',
        type: 'number',
        category: 'figures',
        description: 'Sets the font weight for figcaptions.'
    },
    {
        name: '--hiq-figcaption-text-color',
        local: '--figcaption-text-color',
        type: 'color',
        category: 'figures',
        description: 'Sets the text color for figcaptions.'
    },
    {
        name: '--hiq-image-border-radius',
        local: '--image-border-radius',
        type: 'number',
        category: 'images',
        description: 'Sets the border radius for img elements.'
    },
    {
        name: '--hiq-table-head-border-width',
        local: '--table-head-border-width',
        type: 'number',
        category: 'tables',
        description:
            'Sets the width of the bottom border on cells within the thead element.'
    },
    {
        name: '--hiq-table-foot-border-width',
        local: '--table-foot-border-width',
        type: 'number',
        category: 'tables',
        description:
            'Sets the width of the top border on cells within the tfoot element.'
    },
    {
        name: '--hiq-table-caption-padding-vertical',
        local: '--table-caption-padding-vertical',
        type: 'number',
        category: 'tables',
        description:
            'Sets the top and bottom padding on the caption element with a table.'
    },
    {
        name: '--hiq-table-caption-text-color',
        local: '--table-caption-text-color',
        type: 'color',
        category: 'tables',
        description:
            'Sets the text color on the caption element within a table.'
    },
    {
        name: '--hiq-table-caption-font-weight',
        local: '--table-caption-font-weight',
        type: 'number',
        category: 'tables',
        description:
            'Sets the font weight for the caption element within a table.'
    },
    {
        name: '--hiq-table-cell-padding-vertical',
        local: '--table-cell-padding-vertical',
        type: 'number',
        category: 'tables',
        description: 'Sets the top and bottom padding for th and td elements.'
    },
    {
        name: '--hiq-table-cell-padding-horizontal',
        local: '--table-cell-padding-horizontal',
        type: 'number',
        category: 'tables',
        description: 'Sets the left and right padding for th and td elements.'
    },
    {
        name: '--hiq-table-cell-border-width',
        local: '--table-cell-border-width',
        type: 'number',
        category: 'tables',
        description: 'Sets the border width for th and td elements.'
    },
    {
        name: '--hiq-table-cell-border-color',
        local: '--table-cell-border-color',
        type: 'color',
        category: 'tables',
        description: 'Sets the border color for th and td elements.'
    },
    {
        name: '--hiq-table-heading-background-color',
        local: '--table-heading-background-color',
        type: 'color',
        category: 'tables',
        description: 'Sets the background color for th elements.'
    },
    {
        name: '--hiq-table-heading-text-color',
        local: '--table-heading-text-color',
        type: 'color',
        category: 'tables',
        description: 'Sets the text color for th elements.'
    },
    {
        name: '--hiq-table-heading-font-weight',
        local: '--table-heading-font-weight',
        type: 'number',
        category: 'tables',
        description: 'Sets the font weight for th elements.'
    },
    {
        name: '--hiq-fieldset-padding-vertical',
        local: '--fieldset-padding-vertical',
        type: 'number',
        category: 'forms',
        description: 'Sets the top and bottom padding for the fieldset element.'
    },
    {
        name: '--hiq-fieldset-padding-horizontal',
        local: '--fieldset-padding-horizontal',
        type: 'number',
        category: 'forms',
        description: 'Sets the left and right margin for the fieldset element.'
    },
    {
        name: '--hiq-fieldset-border-width',
        local: '--fieldset-border-width',
        type: 'number',
        category: 'forms',
        description: 'Sets the border width for the fieldset element.'
    },
    {
        name: '--hiq-fieldset-border-color',
        local: '--fieldset-border-color',
        type: 'color',
        category: 'forms',
        description: 'Sets the border color for the fieldset element.'
    },
    {
        name: '--hiq-legend-margin-bottom',
        local: '--legend-margin-bottom',
        type: 'number',
        category: 'forms',
        description:
            'Sets the bottom margin for the legend element used within a form.'
    },
    {
        name: '--hiq-legend-font-weight',
        local: '--legend-font-weight',
        type: 'number',
        category: 'forms',
        description:
            'Sets the font weight for the legend element used within a form.'
    },
    {
        name: '--hiq-label-margin-bottom',
        local: '--label-margin-bottom',
        type: 'number',
        category: 'forms',
        description:
            'Sets the bottom margin for the label element used within a form to separate it from its related input.'
    },
    {
        name: '--hiq-label-font-weight',
        local: '--label-font-weight',
        type: 'number',
        category: 'forms',
        description:
            'Sets the font weight for the label element used within a form.'
    },
    {
        name: '--hiq-input-invalid-border-color',
        local: '--input-invalid-border-color',
        type: 'color',
        category: 'inputs',
        description: 'Sets the border color for invalid inputs.'
    },
    {
        name: '--hiq-input-valid-border-color',
        local: '--input-valid-border-color',
        type: 'color',
        category: 'inputs',
        description: 'Sets the border color for valid inputs.'
    },
    {
        name: '--hiq-input-height',
        local: '--input-height',
        type: 'number',
        category: 'inputs',
        description: 'Sets the default height on text inputs.'
    },
    {
        name: '--hiq-input-padding-vertical',
        local: '--input-padding-vertical',
        type: 'number',
        category: 'inputs',
        description: 'Sets the top and bottom padding on text inputs.'
    },
    {
        name: '--hiq-input-padding-horizontal',
        local: '--input-padding-horizontal',
        type: 'number',
        category: 'inputs',
        description: 'Sets the left and right padding on text inputs.'
    },
    {
        name: '--hiq-input-border-width',
        local: '--input-border-width',
        type: 'number',
        category: 'inputs',
        description:
            'Sets the border width on text inputs, selects and textareas.'
    },
    {
        name: '--hiq-input-border-radius',
        local: '--input-border-radius',
        type: 'number',
        category: 'inputs',
        description:
            'Sets the border radius on text inputs, selects and textareas.'
    },
    {
        name: '--hiq-input-border-color',
        local: '--input-border-color',
        type: 'color',
        category: 'inputs',
        description:
            'Sets the border color on static state text inputs, selects and textareas.'
    },
    {
        name: '--hiq-input-background-color',
        local: '--input-background-color',
        type: 'color',
        category: 'inputs',
        description:
            'Sets the background color on static state text inputs, selects and textareas.'
    },
    {
        name: '--hiq-input-text-color',
        local: '--input-text-color',
        type: 'color',
        category: 'inputs',
        description:
            'Sets the text color on static state text inputs, selects and textareas.'
    },
    {
        name: '--hiq-input-placeholder-color',
        local: '--input-placeholder-color',
        type: 'color',
        category: 'inputs',
        description:
            'Sets the placeholder text color on static state text inputs, selects and textareas.'
    },
    {
        name: '--hiq-input-hover-border-color',
        local: '--input-hover-border-color',
        type: 'color',
        category: 'inputs',
        description:
            'Sets the border color on hovered text inputs, selects and textareas.'
    },
    {
        name: '--hiq-input-hover-background-color',
        local: '--input-hover-background-color',
        type: 'color',
        category: 'inputs',
        description:
            'Sets the background color on hovered text inputs, selects and textareas.'
    },
    {
        name: '--hiq-input-hover-text-color',
        local: '--input-hover-text-color',
        type: 'color',
        category: 'inputs',
        description:
            'Sets the text color on hovered text inputs, selects and textareas.'
    },
    {
        name: '--hiq-input-focus-border-color',
        local: '--input-focus-border-color',
        type: 'color',
        category: 'inputs',
        description:
            'Sets the border color on focused text inputs, selects and textareas.'
    },
    {
        name: '--hiq-input-focus-background-color',
        local: '--input-focus-background-color',
        type: 'color',
        category: 'inputs',
        description:
            'Sets the background color on focused text inputs, selects and textareas.'
    },
    {
        name: '--hiq-input-focus-text-color',
        local: '--input-focus-text-color',
        type: 'color',
        category: 'inputs',
        description:
            'Sets the text color on focused text inputs, selects and textareas.'
    },
    {
        name: '--hiq-textarea-padding-vertical',
        local: '--textarea-padding-vertical',
        type: 'number',
        category: 'textareas',
        description: 'Sets the top and bottom padding on textareas.'
    },
    {
        name: '--hiq-textarea-padding-horizontal',
        local: '--textarea-padding-horizontal',
        type: 'number',
        category: 'textareas',
        description: 'Sets the left and right padding on textareas.'
    },
    {
        name: '--hiq-select-background-image',
        local: '--select-background-image',
        type: 'text',
        category: 'selects',
        description:
            'Sets the background image on select elements. This controls the display of the down caret. By default, this is set to an inline svg.'
    },
    {
        name: '--hiq-select-background-position',
        local: '--select-background-position',
        type: 'text',
        category: 'selects',
        description:
            'Sets the positioning of the caret with relation to the select element.'
    },
    {
        name: '--hiq-select-background-size',
        local: '--select-background-size',
        type: 'number',
        category: 'selects',
        description: 'Sets the size of the caret within the select element.'
    },
    {
        name: '--hiq-select-multiple-checked-background-color',
        local: '--select-multiple-checked-background-color',
        type: 'color',
        category: 'selects',
        description:
            'Sets the background color on a selected option in a select element with the multiple attribute.'
    },
    {
        name: '--hiq-select-multiple-padding-vertical',
        local: '--select-multiple-padding-vertical',
        type: 'number',
        category: 'selects',
        description:
            'Sets the top and bottom padding on a select element with the multiple attribute.'
    },
    {
        name: '--hiq-checkbox-margin-bottom',
        local: '--checkbox-margin-bottom',
        type: 'number',
        category: 'checkboxes',
        description: "Sets the bottom margin on HiQ's custom checkboxes."
    },
    {
        name: '--hiq-checkbox-label-padding-horizontal',
        local: '--checkbox-label-padding-horizontal',
        type: 'number',
        category: 'checkboxes',
        description:
            'Sets the left and right padding of the label following a checkbox input.'
    },
    {
        name: '--hiq-checkbox-label-font-weight',
        local: '--checkbox-label-font-weight',
        type: 'number',
        category: 'checkboxes',
        description:
            'Sets the font weight of the label following a checkbox input.'
    },
    {
        name: '--hiq-checkbox-width',
        local: '--checkbox-width',
        type: 'number',
        category: 'checkboxes',
        description: 'Sets the width of the visual checkbox element.'
    },
    {
        name: '--hiq-checkbox-height',
        local: '--checkbox-height',
        type: 'number',
        category: 'checkboxes',
        description: 'Sets the height of the visual checkbox element.'
    },
    {
        name: '--hiq-checkbox-border-width',
        local: '--checkbox-border-width',
        type: 'number',
        category: 'checkboxes',
        description: 'Sets the width of the visual checkbox element.'
    },
    {
        name: '--hiq-checkbox-border-color',
        local: '--checkbox-border-color',
        type: 'color',
        category: 'checkboxes',
        description: 'Sets the border color of the visual checkbox element.'
    },
    {
        name: '--hiq-checkbox-border-radius',
        local: '--checkbox-border-radius',
        type: 'number',
        category: 'checkboxes',
        description: 'Sets the border radius of the visual checkbox element.'
    },
    {
        name: '--hiq-checkbox-background-color',
        local: '--checkbox-background-color',
        type: 'color',
        category: 'checkboxes',
        description: 'Sets the background color of the visual checkbox element.'
    },
    {
        name: '--hiq-checkbox-hover-background-color',
        local: '--checkbox-hover-background-color',
        type: 'color',
        category: 'checkboxes',
        description:
            'Sets the background color of the visual checkbox element when hovered.'
    },
    {
        name: '--hiq-checkbox-focus-background-color',
        local: '--checkbox-focus-background-color',
        type: 'color',
        category: 'checkboxes',
        description:
            'Sets the background color of the visual checkbox element when focused.'
    },
    {
        name: '--hiq-checkbox-checked-border-color',
        local: '--checkbox-checked-border-color',
        type: 'color',
        category: 'checkboxes',
        description:
            'Sets the border color of the visual checkbox element when the input is checked.'
    },
    {
        name: '--hiq-checkbox-checked-background-color',
        local: '--checkbox-checked-background-color',
        type: 'color',
        category: 'checkboxes',
        description:
            'Sets the background color of the visual checkbox element when the input is checked.'
    },
    {
        name: '--hiq-checkbox-check-width',
        local: '--checkbox-check-width',
        type: 'number',
        category: 'checkboxes',
        description: 'Sets the width of the check mark within the checkbox.'
    },
    {
        name: '--hiq-checkbox-check-height',
        local: '--checkbox-check-height',
        type: 'number',
        category: 'checkboxes',
        description: 'Sets the height of the check mark within the checkbox.'
    },
    {
        name: '--hiq-checkbox-check-border-width',
        local: '--checkbox-check-border-width',
        type: 'number',
        category: 'checkboxes',
        description:
            'Sets the border width of the check mark within the checkbox.'
    },
    {
        name: '--hiq-checkbox-check-color',
        local: '--checkbox-check-color',
        type: 'color',
        category: 'checkboxes',
        description: 'Sets the color of the check mark within the checkbox.'
    },
    {
        name: '--hiq-checkbox-indeterminate-width',
        local: '--checkbox-indeterminate-width',
        type: 'number',
        category: 'checkboxes',
        description:
            'Sets the width of the mark within an indeterminate checkbox.'
    },
    {
        name: '--hiq-radio-margin-bottom',
        local: '--radio-margin-bottom',
        type: 'number',
        category: 'radio-buttons',
        description: "Sets the bottom margin on HiQ's custom radio buttons."
    },
    {
        name: '--hiq-radio-label-padding-horizontal',
        local: '--radio-label-padding-horizontal',
        type: 'number',
        category: 'radio-buttons',
        description:
            'Sets the left and right padding of the label following a radio input.'
    },
    {
        name: '--hiq-radio-label-font-weight',
        local: '--radio-label-font-weight',
        type: 'number',
        category: 'radio-buttons',
        description:
            'Sets the font weight of the label following a radio input.'
    },
    {
        name: '--hiq-radio-width',
        local: '--radio-width',
        type: 'number',
        category: 'radio-buttons',
        description: 'Sets the width of the visual radio element.'
    },
    {
        name: '--hiq-radio-height',
        local: '--radio-height',
        type: 'number',
        category: 'radio-buttons',
        description: 'Sets the height of the visual radio element.'
    },
    {
        name: '--hiq-radio-border-width',
        local: '--radio-border-width',
        type: 'color',
        category: 'radio-buttons',
        description: 'Sets the border width of the visual radio element.'
    },
    {
        name: '--hiq-radio-border-color',
        local: '--radio-border-color',
        type: 'color',
        category: 'radio-buttons',
        description: 'Sets the border color of the visual radio element.'
    },
    {
        name: '--hiq-radio-border-radius',
        local: '--radio-border-radius',
        type: 'number',
        category: 'radio-buttons',
        description: 'Sets the border radius of the visual radio element.'
    },
    {
        name: '--hiq-radio-background-color',
        local: '--radio-background-color',
        type: 'color',
        category: 'radio-buttons',
        description: 'Sets the background color of the visual radio element.'
    },
    {
        name: '--hiq-radio-hover-background-color',
        local: '--radio-hover-background-color',
        type: 'color',
        category: 'radio-buttons',
        description:
            'Sets the background color of the visual radio element when hovered.'
    },
    {
        name: '--hiq-radio-focus-background-color',
        local: '--radio-focus-background-color',
        type: 'color',
        category: 'radio-buttons',
        description:
            'Sets the background color of the visual radio element when focused.'
    },
    {
        name: '--hiq-radio-checked-border-color',
        local: '--radio-checked-border-color',
        type: 'color',
        category: 'radio-buttons',
        description:
            'Sets the border color of the visual radio element when the input is checked.'
    },
    {
        name: '--hiq-radio-checked-background-color',
        local: '--radio-checked-background-color',
        type: 'color',
        category: 'radio-buttons',
        description:
            'Sets the background color of the visual radio element when the input is checked.'
    },
    {
        name: '--hiq-radio-check-width',
        local: '--radio-check-width',
        type: 'number',
        category: 'radio-buttons',
        description: 'Sets the width of the circle within the radio button.'
    },
    {
        name: '--hiq-radio-check-height',
        local: '--radio-check-height',
        type: 'number',
        category: 'radio-buttons',
        description: 'Sets the height of the circle within the radio button.'
    },
    {
        name: '--hiq-radio-check-border-radius',
        local: '--radio-check-border-radius',
        type: 'number',
        category: 'radio-buttons',
        description:
            'Sets the border-radius of the circle within the radio button.'
    },
    {
        name: '--hiq-radio-check-background-color',
        local: '--radio-check-background-color',
        type: 'color',
        category: 'radio-buttons',
        description:
            'Sets the background color of the circle within the radio button.'
    },
    {
        name: '--hiq-range-input-thumb-width',
        local: '--range-input-thumb-width',
        type: 'number',
        category: 'range-inputs',
        description: 'Sets the width of the range input draggable handle.'
    },
    {
        name: '--hiq-range-input-thumb-height',
        local: '--range-input-thumb-height',
        type: 'number',
        category: 'range-inputs',
        description: 'Sets the height of the range input draggable handle.'
    },
    {
        name: '--hiq-range-input-thumb-border-radius',
        local: '--range-input-thumb-border-radius',
        type: 'number',
        category: 'range-inputs',
        description:
            'Sets the border radius of the range input draggable handle.'
    },
    {
        name: '--hiq-range-input-thumb-background-color',
        local: '--range-input-thumb-background-color',
        type: 'color',
        category: 'range-inputs',
        description:
            'Sets the background color of the range input draggable handle.'
    },
    {
        name: '--hiq-range-input-track-height',
        local: '--range-input-track-height',
        type: 'number',
        category: 'range-inputs',
        description: 'Sets the height of the range input track.'
    },
    {
        name: '--hiq-range-input-track-border-radius',
        local: '--range-input-track-border-radius',
        type: 'number',
        category: 'range-inputs',
        description: 'Sets the border radius of the range input track.'
    },
    {
        name: '--hiq-range-input-track-background-color',
        local: '--range-input-track-background-color',
        type: 'color',
        category: 'range-inputs',
        description: 'Sets the background color of the range input track.'
    },
    {
        name: '--hiq-color-input-background-color',
        local: '--color-input-background-color',
        type: 'color',
        category: 'color-inputs',
        description: 'Sets the background color of color inputs.',
        default: 'var(--hiq-color-gray-6)'
    },
    {
        name: '--hiq-meter-background-color',
        local: '--meter-background-color',
        type: 'color',
        category: 'meters',
        description: 'Sets the background color of the meter element track.',
        default: 'var(--hiq-color-gray-6)'
    },
    {
        name: '--hiq-meter-strong-color',
        local: '--meter-strong-color',
        type: 'color',
        category: 'meters',
        description:
            'Sets the background color of the meter bar with an optimum value.',
        default: 'var(--hiq-color-success)'
    },
    {
        name: '--hiq-meter-good-color',
        local: '--meter-good-color',
        type: 'color',
        category: 'meters',
        description:
            'Sets the background color of the meter bar with a sub-optimum value.',
        default: 'var(--hiq-color-warning)'
    },
    {
        name: '--hiq-meter-weak-color',
        local: '--meter-weak-color',
        type: 'color',
        category: 'meters',
        description:
            'Sets the background color of the meter bar with a weak value.',
        default: 'var(--hiq-color-danger)'
    },
    {
        name: '--hiq-progress-height',
        local: '--progress-height',
        type: 'number',
        category: 'progress',
        description: 'Sets the height of the progress element.'
    },
    {
        name: '--hiq-progress-background-color',
        local: '--progress-background-color',
        type: 'color',
        category: 'progress',
        description: 'Sets the background color of the progress element track.'
    },
    {
        name: '--hiq-progress-filled-color',
        local: '--progress-filled-color',
        type: 'color',
        category: 'progress',
        description:
            'Sets the background color of the filled portion of the progress element.'
    },
    {
        name: '--hiq-dialog-border-radius',
        local: '--dialog-border-radius',
        type: 'number',
        category: 'dialogs',
        description: 'Sets the border radius for dialog elements.'
    }
];
