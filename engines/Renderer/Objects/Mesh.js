goog.provide('Renderer.Mesh');
goog.require('Renderer.Core.Spacial');
goog.require('Renderer.Geometric.Geometry');
goog.require('Renderer.Materials.Material');

/**
 * A mesh: An element to decorate with material and geometry.
 * @constructor
 * @extends Renderer.Core.Spacial
 * @author Donovan ORHAN <dono@sybrix.fr>
 */
Renderer.Mesh = function() 
{
    /**
    * Mesh's geometry.
    * @type {Renderer.Geometric.Geometry|null}
    * @private
    */
    this.geometry = null;

    /**
    * Material used by the mesh.
    * @type {Renderer.Materials.Material}
    * @private
    */
    this.material = null;

};
goog.inherits( Renderer.Mesh, Renderer.Core.Spacial );