import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import './editor.css';
import './style.css';

registerBlockType( 'extendscode/basic-block', {
	apiVersion: 1,
	title: 'Example: Basic (esnext) - index.js',
	description: 'Bloque básico (esnext) index.js',
	icon: 'star-half',
	category: 'widgets',
	attributes: {
		message: {
			type: 'string',
			default: 'Basic Block'
		},
	},
	supports: {
		align: ['wide', 'full']
	},
	edit: ( props ) => {
		
		const { attributes: { message }, setAttributes, className } = props;
		
		return (
			<div className={className}>
				<h1>
					<RichText
						tagName="p"
						className={ className }
						onChange={ ( message ) => setAttributes( { message } ) }
						value={ message }
					/>
				</h1>
			</div>
		);
	},
	save: () => { return null; }
} );