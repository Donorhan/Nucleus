goog.provide('Renderer.WebGLRenderer');
goog.require('Renderer.Renderer');
goog.require('Renderer.WebGL.ContextManager');
goog.require('Renderer.WebGL.TextureFactory');

/**
 * The WebGL renderer.
 * @constructor
 * @implements {Renderer.Renderer}
 * @param {HTMLElement} canvas Canvas to use as a renderer.
 * @author Donovan ORHAN <dono@sybrix.fr>
 */
Renderer.WebGLRenderer = function( canvas ) 
{
	/**
	* Context for this renderer.
	* @type {WebGLRenderingContext}
	* @private
	*/
	this.context = Renderer.WebGL.ContextManager.getInstance().create( canvas );

	/**
	* Texture factory for this renderer.
    * @type {Renderer.WebGL.TextureFactory}
    * @private
	*/
	this.textureFactory = new Renderer.WebGL.TextureFactory( this.context );

};

/**
 * Method called before the rendering.
 * @param {Renderer.Scene} scene Scene to draw.
 * @param {Renderer.Camera} camera Camera to use.
 * @private
 */
Renderer.WebGLRenderer.prototype.preRendering = function( scene, camera ) 
{
    this.context.clearColor( 0.2, 0.2, 0.2, 1.0 );
    this.context.clear( goog.webgl.COLOR_BUFFER_BIT | goog.webgl.DEPTH_BUFFER_BIT );
};

/**
 * Method called after the rendering.
 * @param {Renderer.Scene} scene Scene to draw.
 * @param {Renderer.Camera} camera Camera to use.
 * @private
 */
Renderer.WebGLRenderer.prototype.postRendering = function( scene, camera ) 
{

};

/**
 * Render the given scene with the given camera.
 * @param {Renderer.Scene} scene Scene to draw.
 * @param {Renderer.Camera} camera Camera to use.
 */
Renderer.WebGLRenderer.prototype.render = function( scene, camera ) 
{
	this.preRendering( scene, camera );
	this.rendering( scene, camera );
	this.postRendering( scene, camera );
};

/**
 * Rendering method.
 * @param {Renderer.Scene} scene Scene to draw.
 * @param {Renderer.Camera} camera Camera to use.
 */
Renderer.WebGLRenderer.prototype.rendering = function( scene, camera ) 
{
	var spacials = scene.getChildren();

	for( var i = 0, len = scene.getChildrenCount(); i < len; ++i ) 
	{

	}
};

/**
 * Return a reference to the context manager.
 * @return {Renderer.WebGL.ContextManager} A reference to the context manager.
 */
Renderer.WebGLRenderer.prototype.getContextManager = function() 
{
	return Renderer.WebGL.ContextManager.getInstance();
};

/**
 * Return the renderer's height.
 * @return {number} Height of the renderer in pixels.
 */
Renderer.WebGLRenderer.prototype.getHeight = function() 
{
	return 0;
};

/**
 * Return the factory for this renderer.
 * @return {Renderer.WebGL.TextureFactory} Texture's factory for this renderer.
 */
Renderer.WebGLRenderer.prototype.getTextureFactory = function() 
{
	return this.textureFactory;
};

/**
 * Return the renderer's width.
 * @return {number} Width of the renderer in pixels.
 */
Renderer.WebGLRenderer.prototype.getWidth = function() 
{
	return 0;
};