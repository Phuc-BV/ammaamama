export enum HttpStatusCodeConstants {
  HTTP_STATUS_200 = 200,
  HTTP_STATUS_500 = 500,
  HTTP_STATUS_400 = 400,
  HTTP_STATUS_401 = 401,
  HTTP_STATUS_403 = 403,
  HTTP_STATUS_404 = 404
}

export enum CommonAction {
  DELETE_FLAG = 'DELETE',
  SAVE_EDIT_FLAG = 'SAVE_EDIT',
  DOWNLOAD_FILE = 'DOWNLOAD_FILE',
  COORDINATE_DELIVERY_SLIP = 'COORDINATE_DELIVERY_SLIP',
  WEIGHT_KIND_BRAND_ID_NOT_MATCH = "WEIGHT_KIND_BRAND_ID_NOT_MATCH",
  ALREADY_EXISTS = "ALREADY_EXISTS"
}

export enum PageSize {
  PAGE_SIZE = 50,
  PAGE_LINK_SIZE = 10,
}

export enum LANGUAGE {
  VI = "vi",
  EN = "en"
}