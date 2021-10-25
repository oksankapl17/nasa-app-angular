
export interface Options {
  name: string;
  value: string;
}

export interface RoverPhotos {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}
export interface EpicPhoto {
  identifier: string;
  caption: string;
  image: string;
}

export interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}
export interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}
export interface RoverPhotosResponse {
  photos: RoverPhotos[];
}

