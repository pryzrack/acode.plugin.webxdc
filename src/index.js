import plugin from '../plugin.json';
import template from './template.html';
import icon from '../icon-32x32.png';
import manifest from './manifest.toml';

const projects = acode.require('projects');


const projectFileObj = async () => {
  return {
    'index.html': template,
    'manifest.toml': manifest,
  }
}


projects.set('webxdc', projectFileObj, icon);


class AcodePlugin {
  async init($page) {
    $page.id = plugin.id;
  }
  async createProject() {
    
  }
  
  async enableWebxdcApi() {
    // trabajar aquí
  }
  
  async destroy() {
    
  }
}



if (window.acode) {
  const acodePlugin = new AcodePlugin();
  acode.setPluginInit(plugin.id, (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
    if (!baseUrl.endsWith('/')) {
      baseUrl += '/';
    }
    acodePlugin.baseUrl = baseUrl;
    acodePlugin.init($page, cacheFile, cacheFileUrl);
  });
  acode.setPluginUnmount(plugin.id, () => {
    acodePlugin.destroy();
  });
}