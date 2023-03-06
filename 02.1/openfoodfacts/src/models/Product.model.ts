import { CategoriesProperties, CategoryProperties, EcoscoreData, EcoscoreExtendedData, ForestFootprintData, Grades2, Images, Ingredient, IngredientsAnalysis, Languages, LanguagesCodes, NovaGroupsMarkers, NutrientLevels, Nutriments, NutriscoreData, OwnerFields, Packaging3, Scores2, SelectedImages, Source, SourcesFields, SpecificIngredient } from "./Propreties.model";

export interface Product {
  _id: string;
  _keywords: string[];
  abbreviated_product_name?: string;
  abbreviated_product_name_fr?: string;
  abbreviated_product_name_fr_imported?: string;
  abbreviated_product_name_imported?: string;
  added_countries_tags: any[];
  additives_debug_tags?: string[];
  additives_n: number;
  additives_old_n: number;
  additives_old_tags: string[];
  additives_original_tags: string[];
  additives_prev_original_tags?: string[];
  additives_tags: string[];
  allergens: string;
  allergens_from_ingredients: string;
  allergens_from_user: string;
  allergens_hierarchy: string[];
  allergens_imported?: string;
  allergens_lc?: string;
  allergens_tags: string[];
  amino_acids_prev_tags?: any[];
  amino_acids_tags: any[];
  brands?: string;
  brands_imported?: string;
  brands_tags?: string[];
  categories: string;
  categories_hierarchy: string[];
  categories_imported?: string;
  categories_lc: string;
  categories_old?: string;
  categories_properties: CategoriesProperties;
  categories_properties_tags: string[];
  categories_tags: string[];
  category_properties?: CategoryProperties;
  checkers_tags: string[];
  ciqual_food_name_tags?: string[];
  cities_tags?: string[];
  code: string;
  codes_tags: string[];
  compared_to_category: string;
  complete: number;
  completeness: number;
  conservation_conditions?: string;
  conservation_conditions_fr?: string;
  conservation_conditions_fr_imported?: string;
  correctors_tags: string[];
  countries: string;
  countries_beforescanbot?: string;
  countries_hierarchy: string[];
  countries_imported?: string;
  countries_lc?: string;
  countries_tags: string[];
  created_t: number;
  creator: string;
  customer_service?: string;
  customer_service_fr?: string;
  customer_service_fr_imported?: string;
  data_quality_bugs_tags: any[];
  data_quality_errors_tags: any[];
  data_quality_info_tags: string[];
  data_quality_tags: string[];
  data_quality_warnings_tags: string[];
  data_sources?: string;
  data_sources_imported?: string;
  data_sources_tags?: string[];
  debug_param_sorted_langs?: string[];
  debug_tags?: string[];
  ecoscore_data: EcoscoreData;
  ecoscore_extended_data?: EcoscoreExtendedData;
  ecoscore_extended_data_version?: string;
  ecoscore_grade: string;
  ecoscore_score?: number;
  ecoscore_tags: string[];
  editors?: string[];
  editors_tags: string[];
  emb_codes?: string;
  emb_codes_20141016?: string;
  emb_codes_orig?: string;
  emb_codes_tags?: string[];
  entry_dates_tags: string[];
  environment_impact_level?: string;
  environment_impact_level_tags?: any[];
  expiration_date?: string;
  food_groups: string;
  food_groups_tags: string[];
  'fruits-vegetables-nuts_100g_estimate'?: number;
  generic_name?: string;
  generic_name_bg?: string;
  generic_name_de?: string;
  generic_name_en?: string;
  generic_name_es?: string;
  generic_name_fr?: string;
  generic_name_fr_imported?: string;
  generic_name_it?: string;
  generic_name_ru?: string;
  generic_name_sr?: string;
  generic_name_xx?: string;
  generic_name_xx_debug_tags?: any[];
  grades?: Grades2;
  id?: string;
  image_front_small_url: string;
  image_front_thumb_url: string;
  image_front_url: string;
  image_ingredients_small_url?: string;
  image_ingredients_thumb_url?: string;
  image_ingredients_url?: string;
  image_nutrition_small_url?: string;
  image_nutrition_thumb_url?: string;
  image_nutrition_url?: string;
  image_packaging_small_url?: string;
  image_packaging_thumb_url?: string;
  image_packaging_url?: string;
  image_small_url: string;
  image_thumb_url: string;
  image_url: string;
  images: Images;
  informers_tags: string[];
  ingredients: Ingredient[];
  ingredients_analysis: IngredientsAnalysis;
  ingredients_analysis_tags: string[];
  ingredients_debug?: string | undefined[];
  ingredients_from_or_that_may_be_from_palm_oil_n: number;
  ingredients_from_palm_oil_n: number;
  ingredients_from_palm_oil_tags: any[];
  ingredients_hierarchy: string[];
  ingredients_ids_debug?: string[];
  ingredients_n: number;
  ingredients_n_tags: string[];
  ingredients_original_tags: string[];
  ingredients_percent_analysis: number;
  ingredients_tags: string[];
  ingredients_text: string;
  ingredients_text_bg?: string;
  ingredients_text_de?: string;
  ingredients_text_debug?: string;
  ingredients_text_en?: string;
  ingredients_text_es?: string;
  ingredients_text_fr?: string;
  ingredients_text_fr_imported?: string;
  ingredients_text_it?: string;
  ingredients_text_ru?: string;
  ingredients_text_sr?: string;
  ingredients_text_with_allergens: string;
  ingredients_text_with_allergens_bg?: string;
  ingredients_text_with_allergens_de?: string;
  ingredients_text_with_allergens_en?: string;
  ingredients_text_with_allergens_es?: string;
  ingredients_text_with_allergens_fr?: string;
  ingredients_text_with_allergens_it?: string;
  ingredients_text_with_allergens_ru?: string;
  ingredients_text_with_allergens_sr?: string;
  ingredients_text_xx?: string;
  ingredients_text_xx_debug_tags?: any[];
  ingredients_that_may_be_from_palm_oil_n: number;
  ingredients_that_may_be_from_palm_oil_tags: string[];
  ingredients_with_specified_percent_n: number;
  ingredients_with_specified_percent_sum: number;
  ingredients_with_unspecified_percent_n: number;
  ingredients_with_unspecified_percent_sum: number;
  interface_version_created?: string;
  interface_version_modified: string;
  known_ingredients_n: number;
  labels?: string;
  labels_hierarchy?: string[];
  labels_lc?: string;
  labels_old?: string;
  labels_tags?: string[];
  lang: string;
  lang_imported?: string;
  languages: Languages;
  languages_codes: LanguagesCodes;
  languages_hierarchy: string[];
  languages_tags: string[];
  last_edit_dates_tags: string[];
  last_editor: string;
  last_image_dates_tags: string[];
  last_image_t: number;
  last_modified_by: string;
  last_modified_t: number;
  lc: string;
  lc_imported?: string;
  link?: string;
  main_countries_tags: any[];
  manufacturing_places?: string;
  manufacturing_places_tags?: string[];
  max_imgid: any;
  minerals_prev_tags?: any[];
  minerals_tags: string[];
  misc_tags: string[];
  new_additives_n?: number;
  no_nutrition_data?: string;
  no_nutrition_data_imported?: string;
  nova_group?: number;
  nova_group_debug: string;
  nova_groups?: string;
  nova_groups_markers?: NovaGroupsMarkers;
  nova_groups_tags: string[];
  nucleotides_prev_tags?: any[];
  nucleotides_tags: any[];
  nutrient_levels: NutrientLevels;
  nutrient_levels_tags: string[];
  nutriments: Nutriments;
  nutriscore_data?: NutriscoreData;
  nutriscore_grade?: string;
  nutriscore_score?: number;
  nutriscore_score_opposite?: number;
  nutrition_data?: string;
  nutrition_data_per: string;
  nutrition_data_per_imported?: string;
  nutrition_data_prepared?: string;
  nutrition_data_prepared_per: string;
  nutrition_data_prepared_per_imported?: string;
  nutrition_grade_fr?: string;
  nutrition_grades?: string;
  nutrition_grades_tags: string[];
  nutrition_score_beverage: number;
  nutrition_score_debug: string;
  obsolete?: string;
  obsolete_imported?: string;
  obsolete_since_date?: string;
  origin_bg?: string;
  origin_de?: string;
  origin_en?: string;
  origin_es?: string;
  origin_fr?: string;
  origin_it?: string;
  origin_ru?: string;
  origin_sr?: string;
  origins?: string;
  origins_hierarchy?: string[];
  origins_lc?: string;
  origins_old?: string;
  origins_tags?: string[];
  other_nutritional_substances_prev_tags?: any[];
  other_nutritional_substances_tags: any[];
  owner?: string;
  owner_fields?: OwnerFields;
  owner_imported?: string;
  owners_tags?: string;
  packaging?: string;
  packaging_hierarchy?: string[];
  packaging_imported?: string;
  packaging_lc?: string;
  packaging_old?: string;
  packaging_old_before_taxonomization?: string;
  packaging_tags?: string[];
  packaging_text?: string;
  packaging_text_bg?: string;
  packaging_text_de?: string;
  packaging_text_en?: string;
  packaging_text_es?: string;
  packaging_text_fr?: string;
  packaging_text_it?: string;
  packaging_text_ru?: string;
  packaging_text_sr?: string;
  packagings: Packaging3[];
  packagings_complete?: number;
  photographers_tags: string[];
  pnns_groups_1: string;
  pnns_groups_1_tags: string[];
  pnns_groups_2: string;
  pnns_groups_2_tags: string[];
  popularity_key: number;
  popularity_tags: string[];
  preparation?: string;
  preparation_fr?: string;
  preparation_fr_imported?: string;
  producer_version_id?: string;
  producer_version_id_imported?: string;
  product_name?: string;
  product_name_bg?: string;
  product_name_de?: string;
  product_name_debug_tags?: any[];
  product_name_en?: string;
  product_name_es?: string;
  product_name_fr?: string;
  product_name_fr_imported?: string;
  product_name_it?: string;
  product_name_ru?: string;
  product_name_sr?: string;
  product_name_xx?: string;
  product_name_xx_debug_tags?: any[];
  product_quantity: any;
  purchase_places?: string;
  purchase_places_tags?: string[];
  quantity?: string;
  quantity_imported?: string;
  removed_countries_tags: any[];
  rev: number;
  scans_n: number;
  scores?: Scores2;
  selected_images: SelectedImages;
  serving_quantity: any;
  serving_size?: string;
  serving_size_imported?: string;
  sortkey?: number;
  sources?: Source[];
  sources_fields?: SourcesFields;
  states: string;
  states_hierarchy: string[];
  states_tags: string[];
  stores?: string;
  stores_tags?: string[];
  teams?: string;
  teams_tags?: string[];
  traces: string;
  traces_from_ingredients: string;
  traces_from_user: string;
  traces_hierarchy: string[];
  traces_imported?: string;
  traces_lc?: string;
  traces_tags: string[];
  unique_scans_n: number;
  unknown_ingredients_n: any;
  unknown_nutrients_tags: string[];
  update_key: string;
  url: string;
  vitamins_prev_tags?: any[];
  vitamins_tags: string[];
  weighers_tags?: string[];
  weighters_tags?: string[];
  carbon_footprint_from_known_ingredients_debug?: string;
  carbon_footprint_percent_of_known_ingredients?: number;
  checkers?: any[];
  completed_t?: number;
  correctors?: string[];
  informers?: string[];
  photographers?: string[];
  generic_name_nl?: string;
  ingredients_text_nl?: string;
  ingredients_text_with_allergens_nl?: string;
  origin?: string;
  origin_nl?: string;
  packaging_text_nl?: string;
  product_name_nl?: string;
  generic_name_da?: string;
  generic_name_el?: string;
  generic_name_fi?: string;
  generic_name_hr?: string;
  generic_name_hu?: string;
  generic_name_no?: string;
  generic_name_sl?: string;
  generic_name_sv?: string;
  ingredients_text_da?: string;
  ingredients_text_el?: string;
  ingredients_text_fi?: string;
  ingredients_text_hr?: string;
  ingredients_text_hu?: string;
  ingredients_text_no?: string;
  ingredients_text_sl?: string;
  ingredients_text_sv?: string;
  ingredients_text_with_allergens_da?: string;
  ingredients_text_with_allergens_el?: string;
  ingredients_text_with_allergens_fi?: string;
  ingredients_text_with_allergens_hr?: string;
  ingredients_text_with_allergens_hu?: string;
  ingredients_text_with_allergens_no?: string;
  ingredients_text_with_allergens_sl?: string;
  ingredients_text_with_allergens_sv?: string;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients?: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value?: number;
  origin_da?: string;
  origin_el?: string;
  origin_fi?: string;
  origin_hr?: string;
  origin_hu?: string;
  origin_no?: string;
  origin_sl?: string;
  origin_sv?: string;
  packaging_text_da?: string;
  packaging_text_el?: string;
  packaging_text_fi?: string;
  packaging_text_hr?: string;
  packaging_text_hu?: string;
  packaging_text_no?: string;
  packaging_text_sl?: string;
  packaging_text_sv?: string;
  product_name_da?: string;
  product_name_el?: string;
  product_name_fi?: string;
  product_name_hr?: string;
  product_name_hu?: string;
  product_name_no?: string;
  product_name_sl?: string;
  product_name_sv?: string;
  generic_name_pt?: string;
  ingredients_text_pt?: string;
  ingredients_text_with_allergens_pt?: string;
  origin_pt?: string;
  packaging_text_pt?: string;
  product_name_pt?: string;
  generic_name_ro?: string;
  ingredients_text_fr_ocr_1552409817?: string;
  ingredients_text_fr_ocr_1552409817_result?: string;
  ingredients_text_ro?: string;
  ingredients_text_ro_ocr_1598776898?: string;
  ingredients_text_ro_ocr_1598776898_result?: string;
  ingredients_text_with_allergens_ro?: string;
  link_imported?: string;
  nutriscore_grade_producer?: string;
  nutriscore_grade_producer_imported?: string;
  origin_ro?: string;
  packaging_text_fr_imported?: string;
  packaging_text_ro?: string;
  product_name_ro?: string;
  generic_name_cs?: string;
  ingredients_text_cs?: string;
  ingredients_text_with_allergens_cs?: string;
  origin_cs?: string;
  packaging_text_cs?: string;
  product_name_cs?: string;
  emb_code?: string;
  forest_footprint_data?: ForestFootprintData;
  not_names_tags?: string[];
  nova_group_error?: string;
  origin_fr_imported?: string;
  generic_name_pl?: string;
  generic_name_sk?: string;
  ingredients_text_pl?: string;
  ingredients_text_sk?: string;
  ingredients_text_with_allergens_pl?: string;
  ingredients_text_with_allergens_sk?: string;
  nutrition_score_warning_no_fiber?: number;
  origin_pl?: string;
  origin_sk?: string;
  packaging_text_pl?: string;
  packaging_text_sk?: string;
  product_name_pl?: string;
  product_name_sk?: string;
  labels_imported?: string;
  downgraded?: string;
  ingredients_text_en_ocr_1640195895?: string;
  ingredients_text_en_ocr_1640195895_result?: string;
  ingredients_text_es_ocr_1640195895?: string;
  ingredients_text_es_ocr_1640195895_result?: string;
  specific_ingredients?: SpecificIngredient[];
  checked?: string;
  last_check_dates_tags?: string[];
  last_checked_t?: number;
  last_checker?: string;
  ingredients_text_da_ocr_1546244673?: string;
  ingredients_text_da_ocr_1546244673_result?: string;
  ingredients_text_de_ocr_1546244673?: string;
  ingredients_text_de_ocr_1546244673_result?: string;
  ingredients_text_de_ocr_1630234707?: string;
  ingredients_text_de_ocr_1630234707_result?: string;
  ingredients_text_fr_ocr_1546244673?: string;
  ingredients_text_fr_ocr_1546244673_result?: string;
  ingredients_text_fr_ocr_1549441336?: string;
  ingredients_text_fr_ocr_1549441336_result?: string;
  ingredients_text_nl_ocr_1546244673?: string;
  ingredients_text_nl_ocr_1546244673_result?: string;
  ingredients_text_nl_ocr_1546244892?: string;
  ingredients_text_nl_ocr_1546244892_result?: string;
  ingredients_text_no_ocr_1546244673?: string;
  ingredients_text_no_ocr_1546244673_result?: string;
  ingredients_text_sv_ocr_1546244673?: string;
  ingredients_text_sv_ocr_1546244673_result?: string;
  nutrition_grade_fr_producer?: string;
  producer?: string;
  producer_fr?: string;
  origins_fr?: string;
}
