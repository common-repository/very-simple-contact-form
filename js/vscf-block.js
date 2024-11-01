"use strict";

(function () {
	var _wp = wp,
	registerBlockType = _wp.blocks.registerBlockType,
	createElement = _wp.element.createElement,
	serverSideRender = _wp.serverSideRender === void 0 ? _wp.components.serverSideRender : _wp.serverSideRender,
	InspectorControls = _wp.blockEditor.InspectorControls,
	PanelBody = _wp.components.PanelBody,
	TextareaControl = _wp.components.TextareaControl,
	Placeholder = _wp.components.Placeholder,
	
	disabled = _wp.components.Disabled,
	
	Button = _wp.components.Button;

	registerBlockType('vscf/vscf-block', {
		title: 'VS Contact Form',
		icon: 'email',
		category: 'text',
		attributes: {
			shortcodeSettings: {
				type: 'string'
			},
			noNewChanges: {
				type: 'boolean'
			},
			executed: {
				type: 'boolean'
			}
		},
		edit: function edit(props) {
			var _props = props,
			setAttributes = _props.setAttributes,
			attributes = _props.attributes,
			attributes$sho = attributes.shortcodeSettings,
			shortcodeSettings = attributes$sho === void 0 ? null : attributes$sho,
			attributes$cli = attributes.noNewChanges,
			noNewChanges = attributes$cli === void 0 ? true : attributes$cli,
			attributes$exe = attributes.executed,
			executed = attributes$exe === void 0 ? false : attributes$exe;

			function setState(shortcodeSettingsContent) {
				setAttributes({
					noNewChanges: false,
					shortcodeSettings: shortcodeSettingsContent
				});
			}

			function previewClick(content) {
				setAttributes({
					noNewChanges: true,
					executed: false
				});
			}

			function afterRender() {
				setAttributes({
					executed: true
				});
			}

			var jsx;

			jsx = [React.createElement(InspectorControls, {
					key: "vscf-block-editor-inspector-controls"
				},
				React.createElement(PanelBody, {
					key: "vscf-block-editor-panel-body",
					title: vscf_block_l10n.addSettings
				},
				React.createElement(TextareaControl, {
					key: "vscf-block-editor-textarea",
					label: vscf_block_l10n.shortcodeSettingsLabel,
					help: vscf_block_l10n.example + ": email_to=\"info@example.com\"",
					value: shortcodeSettings,
					onChange: setState
				}),
				React.createElement('div', {
					key: "vscf-block-editor-preview-button-div",
					className: "components-base-control"
				},
				React.createElement(Button, {
					key: "vscf-block-editor-preview-button-primary",
					onClick: previewClick,
					isSecondary: true
				}, vscf_block_l10n.previewButton
				)
				),
				React.createElement('div', {
					key: "vscf-block-editor-info-div",
					className: "components-base-control"
				}, vscf_block_l10n.linkText + " "
				,
				React.createElement('a', {
					key: "vscf-block-editor-info-link",
					href: "https://wordpress.org/plugins/very-simple-contact-form",
					rel: "noopener noreferrer",
					target: "_blank"
				}, vscf_block_l10n.linkLabel
				)
				)
				)
			)];

			if (noNewChanges) {
				afterRender();
				jsx.push(React.createElement(serverSideRender, {
					key: "vscf-block-editor-server-side-render",
					block: "vscf/vscf-block",
					attributes: props.attributes
				}));
			} else {
				props.attributes.noNewChanges = false;
				jsx.push(React.createElement(Placeholder, {
					key: "vscf-block-editor-placeholder"
				}, React.createElement(Button, {
					key: "vscf-block-editor-preview-button-secondary",
					onClick: previewClick,
					isSecondary: true
				}, vscf_block_l10n.previewButton
				)
				));
			}

			return jsx;
		},
		save: function save() {
			return null;
		}
	});
})();
