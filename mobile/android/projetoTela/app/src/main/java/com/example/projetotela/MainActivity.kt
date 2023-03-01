package com.example.projetotela

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText

class MainActivity : AppCompatActivity() {
    lateinit var login : EditText
    lateinit var password : EditText
    lateinit var submit : Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        login = findViewById(R.id.inputLogin)
        password = findViewById(R.id.inputPassword)
        submit = findViewById(R.id.buttonSubmit)
        submit.setOnClickListener { updateScreen()SSS }
    }

    private fun updateScreen(){
        var l = login.text.toString()
        var p = password.text.toString()

        if(l.equals("aluno") && p.equals("1234")){
            val screen = Intent(this@MainActivity,screen2::class.java)
            startActivity(screen)
        } else {
            login.setText("")
            password.setText("")
            login.requestFocus()
        }
    }
}

