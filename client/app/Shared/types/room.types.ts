import {
	comfortsType,
	reachType,
	termsType,
} from '@/store/Slices/MainForm/MainForm.interface'

export interface IRoom {
	_id: string
	bookings: any[]
	livingСonditions: termsType[]
	comforts: comfortsType[]
	accessibility: reachType[]
	countReviews: number
	images: string[]
	price: number
	rate: number
	roomNumber: number
	type: string
	__v: number
}
