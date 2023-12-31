export type InputInfo = {
  inputName: string;
  label?: string;
  options?: object;
  errorsMessage?: string;
  type?: string;
  dataAtribute?: string;
  value?: string | number;
  placeholder?: string;
  min?: string;
};

export type TripType = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
};

export type BookingsTrip = {
  id: string;
  userId: string;
  createdAt: string;
  trip: {
    title: string;
    duration: number;
    price: number;
  };
  tripId?: string;
  guests: number;
  date: string;
  totalPrice: number;
};
