import React from 'react'

const Login = () => {
  return (
    <View>
        <Text>
            login
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
            <Text>Don't have an account?</Text>
            <TouchableOpacity>
                <Text>Sign up</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login