export enum Course {
  CSC491,
  CSC532
}

class Poster {
  id: number;
  authors: string[];
  title: string;
  abstract: string;
  imageURL: string;
  videoURL: string;
  course: Course;

  constructor(id: number, authors: string[], title: string, abstract: string, imageURL: string, videoURL: string, course: string) {
    this.id = id
    this.authors = [...authors]
    this.title = title;
    this.abstract = abstract;
    this.imageURL = imageURL;
    this.videoURL = videoURL;
    if (course === 'csc491') {
      this.course = Course.CSC491
    } else {
      this.course = Course.CSC532
    }
  }
}

type LoadPosterFromJSONFunc = (jsonPosters: { posterId: number, authors: string[], title: string, abstract: string, imageUrl: string, videoUrl: string, course: string }[]) => Poster[]

export const loadPostersFromJSON: LoadPosterFromJSONFunc = (jsonPosters) => {
  return jsonPosters.map(jsonPoster => new Poster(jsonPoster.posterId, jsonPoster.authors, jsonPoster.title, jsonPoster.abstract, jsonPoster.imageUrl, jsonPoster.videoUrl, jsonPoster.course));
}

export default Poster;