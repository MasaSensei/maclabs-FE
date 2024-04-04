export interface DetailServices {
  status: number;
  message: string;
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
  data: [
    {
      id: number;
      id_devices: number;
      name: string;
      image: string;
      meta_keyword: string;
      meta_description: string;
      content: string;
      url: string;
      created_at: string;
      updated_at: string;
      category: string;
    }
  ];
}
