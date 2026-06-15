export const foodRenderAlts: Record<string, string> = {
  'bar': 'Photorealistic 3D render of a protein bar. Modeled in Maya, sculpted in ZBrush, rendered in V-Ray.',
  'bonbon': 'Hyper-detailed 3D render of a chocolate bonbon. Studio-lit, rendered in V-Ray with photo-finish in Photoshop.',
  'bravas-1': 'Cinematic 3D render of patatas bravas with sauce. Modeled in Maya, textured in Photoshop, rendered in V-Ray.',
  'bravas-2': 'Mouth-watering 3D render of patatas bravas. Hyper-detailed texturing, V-Ray lighting, final retouch in Photoshop.',
  'cafe': 'Atmospheric 3D render of an espresso cup with crema. Maya modeling, V-Ray render, Photoshop color grade.',
  'chocolate-bar': 'Glossy 3D render of a dark chocolate bar. Sculpted in ZBrush, rendered in V-Ray, retouched in Photoshop.',
  'chocolate-hover': 'Editorial 3D render of chocolate squares in mid-air. V-Ray lighting, Maya dynamics, Photoshop finalization.',
  'churro': 'Photorealistic 3D render of a churro with sugar. Maya modeling, ZBrush sculpting, V-Ray render.',
  'churros': 'Tactile 3D render of churros in a paper cone. V-Ray render, Photoshop retouch.',
  'coulant': 'Cinematic 3D render of a chocolate coulant with melted center. Maya, ZBrush, V-Ray, Photoshop.',
  'gyoza': 'Studio-lit 3D render of gyoza dumplings. Maya modeling, V-Ray render, Photoshop finishing.',
  'honey-cake': 'Hyper-detailed 3D render of a honey-drizzled cake. ZBrush sculpting, V-Ray lighting, Photoshop polish.',
  'huesito': 'Glossy 3D render of a bone-shaped candy. Maya, V-Ray, Photoshop.',
  'kortxo': 'Photorealistic 3D render of a corkscrew macaron. Maya, ZBrush, V-Ray, Photoshop.',
  'macaron': 'Editorial 3D render of a French macaron. Maya modeling, V-Ray render, Photoshop retouch.',
  'matcha-cookies': 'Cinematic 3D render of matcha cookies. Maya, ZBrush, V-Ray, Photoshop.',
  'panellet-1': 'Mouth-watering 3D render of a traditional panellet. V-Ray lighting, Maya modeling, Photoshop finalization.',
  'panellet-2': 'Photorealistic 3D render of a panellet with pine nuts. ZBrush sculpting, V-Ray render, Photoshop polish.',
  'panellet-3': 'Hyper-detailed 3D render of a panellet. Maya, ZBrush, V-Ray, Photoshop.',
  'pansuflado': 'Studio-lit 3D render of a puffy pastry. Maya modeling, V-Ray render, Photoshop retouch.',
  'pasta': 'Cinematic 3D render of fresh pasta. Maya, V-Ray, Photoshop.',
  'pineapple': 'Editorial 3D render of a pineapple. ZBrush sculpting, V-Ray lighting, Photoshop finalization.',
  'pringle': 'Photorealistic 3D render of a stack of Pringles. Maya dynamics, V-Ray render, Photoshop polish.',
  'snack': 'Hyper-detailed 3D render of a snack. Maya, ZBrush, V-Ray, Photoshop.',
  'spoonful': 'Tactile 3D render of a spoonful of cream. V-Ray lighting, Maya modeling, Photoshop retouch.',
  'tea-matcha': 'Atmospheric 3D render of a matcha tea. Maya, V-Ray, Photoshop.',
  'topoki': 'Studio-lit 3D render of tteokbokki. Maya, ZBrush, V-Ray, Photoshop.',
  'waffle-honey': 'Mouth-watering 3D render of a waffle with honey. Maya modeling, ZBrush sculpting, V-Ray render, Photoshop finishing.',
};

export function getFoodAlt(file: string): string {
  return foodRenderAlts[file] ?? 'Photorealistic 3D food render. Maya, ZBrush, V-Ray, Photoshop.';
}
