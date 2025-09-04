const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dge98w5ln/image/upload';

// Transformaciones automáticas para optimizar carga
const TRANSFORMS = {
  AUTO_OPTIMIZE: 'f_auto,q_auto',
  MEDIUM_SIZE: 'w_800,h_600,c_fill',
  LARGE_SIZE: 'w_1200,h_800,c_fill',
  BLUR_PLACEHOLDER: 'e_blur:2000,q_auto:low,w_20'
} as const;

const FILE_NAMES = {
  PROFILE_PICTURE: 'profile-picture_fvevpq.webp',
  SEBAS_PROFILE: 'sebas-profile_vniodm.png',
  JAIR_PROFILE: 'jair-profile_b6ut6q.png',
  ADRIAN_PROFILE: 'adrian-profile_gyhwj5.png',
  LENIN_PROFILE: 'lenin-profile_xdlrog.png',
  PATRICK_PROFILE: 'patrick-profile_jt7mse.png',
  PATRICK_PROFILE_2: 'patrick-profile-2_mjc0gq.png',
  THIRTY_SHOTS: '30shots_so_ws1pf8.png',
  WORK_TRACKING: 'work-tracking_taa842.png',
  WORK_TRACKING_V8: 'v8-work-tracking_o2waao.png',
  WORK_TRACKING_V3: 'v3-administrative-creation_weta2j.png',
  WORK_TRACKING_NOTIFICATIONS: 'notifications_rnuhpc.png',
  WORK_TRACKING_MONTH_VIEW: 'month-view-processed_vtzjsm.png',
  WORK_TRACKING_MAIN: 'main_pxflfd.png',
  WORK_TRACKING_CALENDAR: 'feat-interactive-calendar_i8j72p.png',
  GENDOCS_MAIN: 'main-image_vouwlx.png',
  GENDOCS_MAIN_ALT: 'main_keabou.png',
  GENDOCS_TEMPLATES: 'feat-templates_k37as9.png',
  GENDOCS_STUDENTS: 'feat-students_dh8lln.png',
  GENDOCS_DEGREES: 'feat-degrees_oq2c7w.png',
  GENDOCS_COUNCIL: 'feat-council_bjivpy.png',
  TRANSLOGI_MAIN: 'main-image_njbi59.png',
  TRANSLOGI_MAIN_ALT: 'main-image-4_xmzmbh.png',
  TRANSLOGI_OTP: 'feat-otp_wnlybc.png',
  TRANSLOGI_NEGOTIATION: 'feat-negotiation_nv5wfw.png',
  TRANSLOGI_MATCHING: 'feat-matching_angiek.png',
  TRANSLOGI_LOCATION: 'feat-location_s5tclg.png',
  FRONTEND_STORE: 'frontend_store_s_ddbczv.png',
  FRONTEND_STORE_ALT:'fs_main_image_j9gkqq.png',
  UTA_WEB: 'utap_main_woynn7.png',
  UTA_WEB_MAIN: 'utap_main_alt_ubqm2b.png',
  COFFEE_BLOG: 'bc_main_alt_e4p4fe.png',
  COFFEE_BLOG_MAIN: 'bc_main_xwrda2.png',
  ROCK_EDM_FESTIVAL: 'roe_main_rq8t3j.png',
  ROCK_EDM_FESTIVAL_MAIN: 'roe_main_alt_uoaliu.png',
  RESTAURANT_APP: 'main_xqkvrm.png',
  SALESFORCE: 'main_jrkofw.png',
  WORKOUT_PLANNER: 'main_a3ifnn.png',
  CAR_RENTAL: 'car_main_qogiig.png',
  FOPYMES: 'fopy_main_dqty4e.png',
  FOPYMES_ALT: 'fopy_main_alt_qbr7nh.png',
  DIZASA_MAIN: 'main_alt_ofnfvy.png',
  DIZASA_MAIN_ALT: 'main_alt_22_qxy95e.png',
  DIZASA_STEPPER: 'stepper2_biwnxe.png',
  DIZASA_PDF: 'pdf2_r6dygu.png',
  DIZASA_QR: 'qrcode2_ud8kwq.png',
  DIZASA_PORTAL: 'web1_clxq8d.png'

} as const;

export const CLOUDINARY_IMAGES = Object.fromEntries(
  Object.entries(FILE_NAMES).map(([key, value]) => [key, `${CLOUDINARY_BASE_URL}/${TRANSFORMS.AUTO_OPTIMIZE}/${value}`])
) as { [K in keyof typeof FILE_NAMES]: string };

// Función para generar URLs optimizadas
export function getOptimizedImage(imageKey: CloudinaryImageKey, transforms: string = TRANSFORMS.AUTO_OPTIMIZE): string {
  const fileName = FILE_NAMES[imageKey];
  return `${CLOUDINARY_BASE_URL}/${transforms}/${fileName}`;
}

// Función para generar placeholder blur
export function getBlurPlaceholder(imageKey: CloudinaryImageKey): string {
  return getOptimizedImage(imageKey, TRANSFORMS.BLUR_PLACEHOLDER);
}

// URLs pre-optimizadas comunes
export const OPTIMIZED_IMAGES = {
  MEDIUM: Object.fromEntries(
    Object.entries(FILE_NAMES).map(([key, value]) => [
      key, 
      `${CLOUDINARY_BASE_URL}/${TRANSFORMS.AUTO_OPTIMIZE},${TRANSFORMS.MEDIUM_SIZE}/${value}`
    ])
  ) as { [K in keyof typeof FILE_NAMES]: string },
  
  LARGE: Object.fromEntries(
    Object.entries(FILE_NAMES).map(([key, value]) => [
      key, 
      `${CLOUDINARY_BASE_URL}/${TRANSFORMS.AUTO_OPTIMIZE},${TRANSFORMS.LARGE_SIZE}/${value}`
    ])
  ) as { [K in keyof typeof FILE_NAMES]: string }
};

export type CloudinaryImageKey = keyof typeof CLOUDINARY_IMAGES; 