import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';
import { HostsModule } from './hosts/hosts.module.js';
import { PropertiesModule } from './properties/properties.module.js';
import { PropertyImagesModule } from './property-images/property-images.module.js';
import { AmenitiesModule } from './amenities/amenities.module.js';
import { PropertyAmenitiesModule } from './property-amenities/property-amenities.module.js';
import { LocationsModule } from './locations/locations.module.js';
import { BookingsModule } from './bookings/bookings.module.js';
import { PaymentsModule } from './payments/payments.module.js';
import { ReviewsModule } from './reviews/reviews.module.js';
import { WishlistModule } from './wishlist/wishlist.module.js';
import { TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password:String(process.env.DB_PASSWORD),
      database:process.env.DB_DATABASE,
      autoLoadEntities:true,
      synchronize:false,
      
    }),
    AuthModule,
    UsersModule,
    HostsModule,
    PropertiesModule,
    PropertyImagesModule,
    AmenitiesModule,
    PropertyAmenitiesModule,
    LocationsModule,
    BookingsModule,
    PaymentsModule,
    ReviewsModule,
    WishlistModule,
  ],
  
})
export class AppModule {}
