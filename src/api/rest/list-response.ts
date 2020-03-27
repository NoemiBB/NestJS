import { Libro } from '../libro';
import { ListAllEntities } from './list-all-entities';

export class ListResponse {
    data: Libro[];
    pagination: ListAllEntities;
    status: string;
    message: string;
}
