import { NextResponse } from 'next/server';
import Database from '@/lib/database';
import User from '@/models/user-model';


export async function POST(req) {
  await Database();

  try {
    const { username, email, password } = await req.json();
    const user = new User({ username, email, password });
    await user.save();
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}

export async function GET(req) {
  await Database();

  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username');

    if (username) {
      const user = await User.findOne({ username }).select('-password');
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      return NextResponse.json(user);
    } else {
      const users = await User.find().select('-password');
      return NextResponse.json(users);
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
}


