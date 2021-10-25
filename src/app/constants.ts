import {Options} from './interfaces';

export const ROVERS: Options[]  = [
  {name: 'Curiosity', value : 'curiosity'},
  {name: 'Opportunity',  value : 'opportunity'},
  {name: 'Spirit', value: 'spirit'}
];
export const TYPE_OF_CAMERA: Record<string, Options[]> = {
  curiosity: [
    {name: 'Front Hazard Avoidance Camera', value : 'fhaz'},
    {name: 'Rear Hazard Avoidance Camera', value : 'rhaz'},
    {name: 'Mast Camera', value : 'mast'},
    {name: 'Chemistry and Camera Complex', value : 'chemcam'},
    {name: 'Mars Hand Lens Imager', value : 'mahli'},
    {name: 'Mars Descent Imager', value : 'mardi'},
    {name: 'Navigation Camera', value : 'navcam'},
  ],
  opportunity: [
    {name: 'Front Hazard Avoidance Camera', value : 'fhaz'},
    {name: 'Rear Hazard Avoidance Camera', value : 'rhaz'},
    {name: 'Navigation Camera', value : 'navcam'},
    {name: 'Panoramic Camera', value : 'pancam'},
    {name: 'Miniature Thermal Emission Spectrometer (Mini-TES)', value : 'minites'},
  ],
  spirit: [
    {name: 'Front Hazard Avoidance Camera', value : 'fhaz'},
    {name: 'Rear Hazard Avoidance Camera', value : 'rhaz'},
    {name: 'Navigation Camera', value : 'navcam'},
    {name: 'Panoramic Camera', value : 'pancam'},
    {name: 'Miniature Thermal Emission Spectrometer (Mini-TES)', value : 'minites'},
  ]
};

