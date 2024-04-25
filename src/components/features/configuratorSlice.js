import { createSlice } from "@reduxjs/toolkit";

// car version images
import legendeModel from "../../Assets/images/configurateur/modele/selection/legende.png";
import pureModel from "../../Assets/images/configurateur/modele/selection/pure.png";

// color PURE  images
import pureBlanc from "../../Assets/images/configurateur/couleurs/selection/blanc.jpg";
import pureBleu from "../../Assets/images/configurateur/couleurs/selection/bleu.jpg";
import pureNoir from "../../Assets/images/configurateur/couleurs/selection/noir.jpg";
// color LEGEND images
import legendeBlanc from "../../Assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg";
import legendeBleu from "../../Assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg";
import legendeNoir from "../../Assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg";

// rims images for WHITE
import rimsLegendWhite from "../../Assets/images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg";
import rimsSeracWhite from "../../Assets/images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg";
import rimsStandardWhite from "../../Assets/images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg";

// rims images for BLUE
import rimsLegendBlue from "../../Assets/images/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg";
import rimsSeracBlue from "../../Assets/images/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg";
import rimsStandardBlue from "../../Assets/images/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg";

// rims images for NOIR
import rimsLegendNoir from "../../Assets/images/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg";
import rimsSeracNoir from "../../Assets/images/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg";
import rimsStandardNoir from "../../Assets/images/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg";

// saddlery images for PURE
import saddleryPureNoirDina from "../../Assets/images/configurateur/interieurs/vues/cuir-noir_dinamica-3.jpg";
import saddleryPureNoirPerfo from "../../Assets/images/configurateur/interieurs/vues/cuir-noir_perfore-3.jpg";

// saddlery images for LEGEND
import saddleryLegendNoir from "../../Assets/images/configurateur/interieurs/vues/cuir-noir-3.jpg";
import saddleryLegendBrun from "../../Assets/images/configurateur/interieurs/vues/cuir-brun-3.jpg";

// equipments design images
import packHeritage from "../../Assets/images/configurateur/equipements/categories/design/pack-heritage.jpg";
import footRest from "../../Assets/images/configurateur/equipements/categories/design/repose-pied-alu.jpg";
// equipments mediaNavigation images
import alpineMetrics from "../../Assets/images/configurateur/equipements/categories/media et navigation/alpine-metrics.jpg";
import audioFocal from "../../Assets/images/configurateur/equipements/categories/media et navigation/audio-focal.jpg";
import audioPremium from "../../Assets/images/configurateur/equipements/categories/media et navigation/audio-premium.jpg";
import audioStandard from "../../Assets/images/configurateur/equipements/categories/media et navigation/audio-standard.jpg";
// equipments comfort images
import packRangement from "../../Assets/images/configurateur/equipements/categories/confort/pack-rangement.jpg";
import regulLimit from "../../Assets/images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg";
import retroExt from "../../Assets/images/configurateur/equipements/categories/confort/retro-ext-chaffant.jpg";
import retroInt from "../../Assets/images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg";
// equipments conduct images
import parkHelp from "../../Assets/images/configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg";
import parkHelp2 from "../../Assets/images/configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg";
import camHelp from "../../Assets/images/configurateur/equipements/categories/conduite/camera-recul.jpg";
import echappement from "../../Assets/images/configurateur/equipements/categories/conduite/echappement-sport.jpg";
// equipments safety images
import helpFrainage from "../../Assets/images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg";
import airbag from "../../Assets/images/configurateur/equipements/categories/securite/airbag.jpg";
import highPerfFreinage from "../../Assets/images/configurateur/equipements/categories/securite/freinage-haute-perf.jpg";
// equipment exterior images
import blueEtrier from "../../Assets/images/configurateur/equipements/categories/personnalisation exterieure/etrier-bleu.jpg";
import greyEtrier from "../../Assets/images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg";
import logoAlpine from "../../Assets/images/configurateur/equipements/categories/personnalisation exterieure/logo-alpine.jpg";
// equipment interior images
import logoVolant from "../../Assets/images/configurateur/equipements/categories/personnalisation interieure/logo-volant.jpg";
import packCarbonne from "../../Assets/images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg";
import pedalAlu from "../../Assets/images/configurateur/equipements/categories/personnalisation interieure/pedal-alu.jpg";
import siege from "../../Assets/images/configurateur/equipements/categories/personnalisation interieure/siege-chauffant.jpg";

// accessories transport protection images
import alarm from "../../Assets/images/configurateur/accessoires/transport et protection/alarme.jpg";
import snowChains from "../../Assets/images/configurateur/accessoires/transport et protection/chaaine-neige.jpg";
import extincteur from "../../Assets/images/configurateur/accessoires/transport et protection/extincteur.jpg";
import extincteurFix from "../../Assets/images/configurateur/accessoires/transport et protection/fixation-extincteur.jpg";
import safetyKit from "../../Assets/images/configurateur/accessoires/transport et protection/kit-securite.jpg";
import protection from "../../Assets/images/configurateur/accessoires/transport et protection/protection-obd.jpg";

// accessories multimedia images
import cameraSupport from "../../Assets/images/configurateur/accessoires/multimedia/support-camera.jpg";
import phoneSupport from "../../Assets/images/configurateur/accessoires/multimedia/support-smartphone.jpg";

// accessories interior images
import filetRangement from "../../Assets/images/configurateur/accessoires/interieur/filet-rangement.jpg";
import tapisCoffre from "../../Assets/images/configurateur/accessoires/interieur/tapis-coffre.jpg";

// accessories material images
import battery from "../../Assets/images/configurateur/accessoires/garage/chargeur-batterie.jpg";
import utilsKit from "../../Assets/images/configurateur/accessoires/garage/kit-outils.jpg";

// accessories exterior images
import antivolJante from "../../Assets/images/configurateur/accessoires/exterieur/antivol-jantes.jpg";
import metal from "../../Assets/images/configurateur/accessoires/exterieur/cabochons-metal.jpg";
import housse from "../../Assets/images/configurateur/accessoires/exterieur/housse.jpg";

const initialState = {
  version: [
    {
      name: "Legende",
      image: legendeModel,
      price: 58.5,
    },
    {
      name: "Pure",
      image: pureModel,
      price: 54.7,
    },
  ],
  color: [
    {
      pure: [
        {
          name: "Teinte spéciale Bleu Alpine",
          image: pureBleu,
          price: 1.8,
        },
        {
          name: "Teinte métallisée Noir Profond",
          image: pureNoir,
          price: 840,
        },
        {
          name: "Peinture opaque Blanc Glacier",
          image: pureBlanc,
          price: 0,
        },
      ],
      legende: [
        {
          name: "Teinte spéciale Bleu Alpine",
          image: legendeBleu,
          price: 1.8,
        },
        {
          name: "Teinte métallisée Noir Profond",
          image: legendeNoir,
          price: 840,
        },
        {
          name: "Peinture opaque Blanc Glacier",
          image: legendeBlanc,
          price: 0,
        },
      ],
    },
  ],
  rims: [
    {
      bleu: [
        {
          name: "Standard",
          image: rimsStandardBlue,
          price: 0,
        },
        {
          name: "Serac",
          image: rimsSeracBlue,
          price: 1.0,
        },
        {
          legende: [
            {
              name: "legende",
              image: rimsLegendBlue,
              price: 0,
            },
          ],
        },
      ],
      noir: [
        {
          name: "Standard",
          image: rimsStandardNoir,
          price: 0,
        },
        {
          name: "Serac",
          image: rimsSeracNoir,
          price: 1.0,
        },
        {
          legende: [
            {
              name: "legende",
              image: rimsLegendNoir,
              price: 0,
            },
          ],
        },
      ],
      blanc: [
        {
          name: "Standard",
          image: rimsStandardWhite,
          price: 0,
        },
        {
          name: "Serac",
          image: rimsSeracWhite,
          price: 1.0,
        },
        {
          legende: [
            {
              name: "legende",
              image: rimsLegendWhite,
              price: 0,
            },
          ],
        },
      ],
    },
  ],
  saddlery: [
    {
      pure: [
        {
          name: "Sièges baquets en cuir noir et Dinamica",
          image: saddleryPureNoirDina,
          price: 0,
        },
        {
          name: "Sièges Confort en cuir noir perforé",
          image: saddleryPureNoirPerfo,
          price: 800,
        },
      ],
      legende: [
        {
          name: "Sièges Confort en cuir noir",
          image: saddleryLegendNoir,
          price: 0,
        },
        {
          name: "Sièges Confort en cuir brun",
          image: saddleryLegendBrun,
          price: 800,
        },
      ],
    },
  ],
  equipments: [
    {
      design: [
        {
          name: "Pack héritage",
          image: packHeritage,
          price: 96,
        },
        {
          name: "Repose-pieds passager en aluminium",
          image: footRest,
          price: 180,
        },
      ],
      mediaAndNavigation: [
        {
          name: "Alpine Télémétrics",
          image: alpineMetrics,
          price: 204,
        },
        {
          name: "Système Audio Focal",
          image: audioFocal,
          price: 600,
        },
        {
          name: "Système Audio Focal Premium",
          image: audioPremium,
          price: 1200,
        },
        {
          name: "Système Audio Standard",
          image: audioStandard,
          price: 0,
        },
      ],
      Comfort: [
        {
          name: "Retroviseur intérieur électrochrome",
          image: retroInt,
          price: 0,
        },
        {
          name: "Rétroviseurs ext. chauf. rabattables élec.",
          image: retroExt,
          price: 504,
        },
        {
          name: "Pack de rangement",
          image: packRangement,
          price: 504,
        },
        {
          name: "Régulateur / limiteur de vitesse",
          image: regulLimit,
          price: 0,
        },
      ],
      Conduct: [
        {
          name: "Aide au stationnement AR",
          image: parkHelp,
          price: 420,
        },
        {
          name: "Aide au stationnement AV et AR",
          image: parkHelp2,
          price: 750,
        },
        {
          name: "Aide au stationnement AV AR et caméra de recul",
          image: camHelp,
          price: 1200,
        },
        {
          name: "Echappement Sport actif",
          image: echappement,
          price: 1500,
        },
      ],
      Safety: [
        {
          name: "Système de freinage Haute-Perf 320mm",
          image: highPerfFreinage,
          price: 1000,
        },
        {
          name: "Assistance au freinage d'urgence",
          image: helpFrainage,
          price: 0,
        },
        {
          name: "Airbags frontaux conducteur et passager",
          image: airbag,
          price: 0,
        },
      ],
      Exterior: [
        {
          name: "Etriers de frein couleur Bleu Alpine",
          image: blueEtrier,
          price: 384,
        },
        {
          name: "Logo Alpine sur les ailes avant",
          image: logoAlpine,
          price: 120,
        },
        {
          name: "Etriers de frein couleur Gris Anthracite",
          image: greyEtrier,
          price: 0,
        },
      ],
      Interior: [
        {
          name: "Pédalier en aluminium",
          image: pedalAlu,
          price: 120,
        },
        {
          name: "Harmonie carbone mat",
          image: packCarbonne,
          price: 0,
        },
        {
          name: "Logo au centre du volant en Bleu Alpine",
          image: logoVolant,
          price: 84,
        },
        {
          name: "Sièges chauffants",
          image: siege,
          price: 400,
        },
      ],
    },
  ],
  accessories: [
    {
      transportProtection: [
        {
          name: "Extincteur 1kg avec manomètre",
          image: extincteur,
          price: 22,
        },
        {
          name: "Chaine à neige Premium Grip",
          image: snowChains,
          price: 336,
        },
        {
          name: "Protection Prise OBD",
          image: protection,
          price: 99,
        },
        {
          name: "Kit de sécurité",
          image: safetyKit,
          price: 20,
        },
        {
          name: "Fixation extincteur",
          image: extincteurFix,
          price: 72,
        },
        {
          name: "Alarme",
          image: alarm,
          price: 543,
        },
      ],
      Multimedia: [
        {
          name: "Support caméra sport",
          image: cameraSupport,
          price: 89,
        },
        {
          name: "Support smartphone magnétique - Fixation sur tableau de bord",
          image: phoneSupport,
          price: 21,
        },
      ],
      Interior: [
        {
          name: "Tapis de coffre",
          image: tapisCoffre,
          price: 83,
        },
        {
          name: "Filet de rangement - Horizontal",
          image: filetRangement,
          price: 59,
        },
      ],
      Material: [
        {
          name: "Chargeur batterie",
          image: battery,
          price: 240,
        },
        {
          name: "Kit Outils Alpine",
          image: utilsKit,
          price: 398,
        },
      ],
      Exterior: [
        {
          name: "Cabochons Alpine - Métalisés",
          image: metal,
          price: 24,
        },
        {
          name: "Housse de protection Alpine",
          image: housse,
          price: 216,
        },
        {
          name: "Antivols pour jante - Noirs",
          image: antivolJante,
          price: 51,
        },
      ],
    },
  ],
};

// example code snippet
const configuratorSlice = createSlice({
  name: "configurator",
  initialState,
  reducers: {
    validItem: (state, action) => {
      state.items.push(action.payload);
    },
    selectColor: (state, action) => {
      state.selectedColor = action.payload;
    },
  },
});


export const {  selectColor, validItem  } =
  configuratorSlice.actions;
export default configuratorSlice.reducer;
