import {View, Text, TextInput, TouchableOpacity} from "react-native"
import { useState } from "react";

const Signup = () => {
    return(
        <View>
            <Text>
                Sign up
            </Text>
            <View>
                <TouchableOpacity>
                    <TextInput
                        placeholder="Enter your email"
                    />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                    <TextInput
                        placeholder="Enter Password"
                    />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                    <TextInput
                        placeholder="Confirm Password"
                    />
                </TouchableOpacity>
            </View>

            <View>
                <Text>Already have an account?</Text>
                <TouchableOpacity>
                    <Text>login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};


export default Signup; 