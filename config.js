import * as d3 from 'd3';

export const [width, height] = [600,600];

// TODO... use new data! Make er fit!
export {data} from "./convert-org-yaml";
// export { default as data } from './data/wto.json';
export const svg = d3.select("#Target");
export const getAppearanceSettings = () => ({
    useEllipseNode: document.forms.appearanceSettings.nodeStyle.value === "nodeStyleEllipse",
    useDirectLink: document.forms.appearanceSettings.linkStyle.value === "linkStyleDirect"
    // useDirectLink: document.forms.appearanceSettings.nodeStyle.value ==
});