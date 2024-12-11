import { NextResponse } from 'next/server';
import clientPromise from '@/lib/database';  

export async function POST(req){
    try{
    const client = await clientPromise;
    const db = client.db()
    const userCollection = db.collection('users');
    const {email,password} = await req.json();
    const user = await userCollection.findOne({email, password});
    return NextResponse.json({message: 'user found!', user}, {status: 200});
    }catch(error){
    console.error('Error fetching users:', error);;
    return NextResponse.json({error: 'Error getting user information'}, {status: 500})
    }
}