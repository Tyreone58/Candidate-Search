// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    image: string;
    name: string;
    location: string;
    email: string;
    bio: string[];
    reject: boolean;
}