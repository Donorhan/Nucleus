// This file was autogenerated by ../../Libs/closure/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../../../../Nucleus/engines/Core/Config.js', ['Nucleus.Config'], []);
goog.addDependency('../../../../Nucleus/engines/Core/Debugging/ErrorManager.js', ['Nucleus.ErrorManager'], ['Nucleus.Config']);
goog.addDependency('../../../../Nucleus/engines/Core/FileManager/File.js', ['Nucleus.File'], ['Nucleus.Resource']);
goog.addDependency('../../../../Nucleus/engines/Core/ResourceManager/Resource.js', ['Nucleus.Resource'], []);
goog.addDependency('../../../../Nucleus/engines/Core/ResourceManager/ResourceManager.js', ['Nucleus.ResourceManager'], ['Nucleus.Resource']);
goog.addDependency('../../../../Nucleus/engines/Core/Transformables/Transformable.js', ['Core.Transformable'], ['goog.vec.Mat4', 'goog.vec.Vec3']);
goog.addDependency('../../../../Nucleus/engines/Renderer.js', ['Renderer.main'], ['Renderer.WebGL.ProgramLibrary', 'Renderer.WebGL.Texture', 'Renderer.WebGLRenderer']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Cameras/Camera.js', ['Renderer.Camera'], ['Core.Transformable', 'goog.vec.Mat3']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Core/Spacial.js', ['Renderer.Core.Spacial'], ['Core.Transformable']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Lights/AbstractLight.js', ['Renderer.Private.AbstractLight'], ['Renderer.Core.Spacial']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Lights/AmbientLight.js', ['Renderer.AmbientLight'], ['Renderer.Private.AbstractLight']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Lights/DirectionalLight.js', ['Renderer.DirectionalLight'], ['Renderer.Private.AbstractLight']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Lights/PointLight.js', ['Renderer.PointLight'], ['Renderer.Private.AbstractLight']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Lights/SpotLight.js', ['Renderer.SpotLight'], ['Renderer.Private.AbstractLight']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Renderers/Renderer.js', ['Renderer.Renderer'], ['Renderer.Camera', 'Renderer.Scene', 'Renderer.TextureFactory']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Renderers/WebGL/Context/ContextFactory.js', ['Renderer.WebGL.ContextFactory'], ['goog.webgl']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Renderers/WebGL/Context/ContextManager.js', ['Renderer.WebGL.ContextManager'], ['Renderer.WebGL.ContextFactory']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Renderers/WebGL/Renderer/Renderer.js', ['Renderer.WebGLRenderer'], ['Renderer.Renderer', 'Renderer.WebGL.ContextManager', 'Renderer.WebGL.RendererCache', 'Renderer.WebGL.TextureFactory']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Renderers/WebGL/Renderer/RendererCache.js', ['Renderer.WebGL.RendererCache'], ['Renderer.WebGL.Program', 'Renderer.WebGL.Texture']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Renderers/WebGL/Shaders/Program.js', ['Renderer.WebGL.Program'], ['Nucleus.ErrorManager', 'Renderer.WebGL.Shader', 'Renderer.WebGL.ShaderDefinition']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Renderers/WebGL/Shaders/ProgramBuilder.js', ['Renderer.WebGL.ProgramBuilder'], ['Nucleus.ErrorManager', 'Renderer.WebGL.Program']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Renderers/WebGL/Shaders/ProgramLibrary.js', ['Renderer.WebGL.ProgramLibrary'], ['Renderer.WebGL.ProgramBuilder']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Renderers/WebGL/Shaders/Shader.js', ['Renderer.WebGL.Shader', 'WebGL.Program.Type', 'WebGL.Program.TypePrecision'], ['Nucleus.File', 'goog.webgl']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Renderers/WebGL/Shaders/ShaderDefinition.js', ['Renderer.WebGL.ShaderDefinition'], ['Renderer.WebGL.ShaderElement']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Renderers/WebGL/Shaders/ShaderElement.js', ['Renderer.WebGL.ShaderElement'], ['WebGL.Program.Type', 'WebGL.Program.TypePrecision']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Renderers/WebGL/Textures/Texture.js', ['Renderer.WebGL.Texture'], ['Renderer.Private.Image', 'Renderer.Private.Video', 'Renderer.Texture', 'Renderer.WebGL.ContextManager']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Renderers/WebGL/Textures/TextureFactory.js', ['Renderer.WebGL.TextureFactory'], ['Renderer.TextureFactory', 'Renderer.WebGL.Texture']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Resources/Image.js', ['Renderer.Private.Image'], ['Renderer.Private.VisualResource']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Resources/Video.js', ['Renderer.Private.Video'], ['Renderer.Private.VisualResource']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Resources/VisualResource.js', ['Renderer.Private.VisualResource'], ['Nucleus.ErrorManager']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Scenes/Scene.js', ['Renderer.Scene'], ['Renderer.AmbientLight', 'Renderer.Core.Spacial', 'Renderer.Private.AbstractLight']);
goog.addDependency('../../../../Nucleus/engines/Renderer/Textures/Texture.js', ['Renderer.Texture'], []);
goog.addDependency('../../../../Nucleus/engines/Renderer/Textures/TextureFactory.js', ['Renderer.TextureFactory'], []);
